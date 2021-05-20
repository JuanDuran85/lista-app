import { Component, OnInit } from '@angular/core';
import { DeseosService } from './../../services/deseos.service';
import { ListaInter } from './../../interfaces/lista-item.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public listaDeseos: ListaInter[] = [];

  constructor(public deseosSer: DeseosService) {}

  ngOnInit(): void {
    this.listaDeseos = this.deseosSer.listas;
  }

}
