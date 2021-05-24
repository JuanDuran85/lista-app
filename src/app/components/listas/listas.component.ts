import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from './../../services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})

export class ListasComponent implements OnInit {

  @ViewChild( IonList) lista: IonList;
  @Input() terminada = true;

  public listaDeseos: Lista[] = [];

  constructor(private router: Router, public deseosSer: DeseosService, public alertController: AlertController) { }

  ngOnInit() {
    this.listaDeseos = this.deseosSer.listas;
  }

  verLista(lista: Lista): void{
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  borrarLista(i: number): void{
    this.listaDeseos.splice(i,1);
    this.deseosSer.guardarStorage();
    /* this.deseosSer.borrarLista(lista); */
  }

  async editarLista(lista: Lista) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data)=>{
            if (data.titulo.length === 0) {return;}
            console.log(data);
            lista.titulo = data.titulo;
            this.deseosSer.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }
}
