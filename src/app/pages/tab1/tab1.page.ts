import { Component, OnInit } from '@angular/core';
import { DeseosService } from './../../services/deseos.service';
import { ListaInter } from './../../interfaces/lista-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public listaDeseos: ListaInter[] = [];

  constructor(public deseosSer: DeseosService, private router: Router) {}

  ngOnInit(): void {
    this.listaDeseos = this.deseosSer.listas;
  }

  agregarLista(){
    console.log('presion...');
    this.router.navigateByUrl('/tabs/tab1/agregar');
  }

}
