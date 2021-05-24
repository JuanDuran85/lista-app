import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from './../../services/deseos.service';
import { Lista } from './../../models/lista.model';
import { ListaItem } from './../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  public lista: Lista;
  public nombreItem = '';

  constructor(private desesosService: DeseosService, private route: ActivatedRoute) { }

  ngOnInit() {
    const listaId = this.route.snapshot.paramMap.get('listaId');

    this.lista = this.desesosService.cargarLista(listaId);
  }

  regresar(){
    console.log('regresando');
  }

  agregarItems(): void{
    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.desesosService.guardarStorage();
  }

  cambioCheck(item: ListaItem){
    const pendiente  = this.lista.items.filter(dataItem => !dataItem.completado).length;
    if (pendiente === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    }else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    };

    this.desesosService.guardarStorage();
  }

  borrarItem(i: number): void{
    this.lista.items.splice(i,1);
    this.desesosService.guardarStorage();
  }
}
