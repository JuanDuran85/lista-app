import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})

export class DeseosService {

  public listas: Lista[] = [];

  constructor(){
    const lista1 = new Lista('Primera tarea a realizar');
    const lista2 = new Lista('Segunda tarea a realizar');
    this.listas.push(lista1, lista2);
  }
}
