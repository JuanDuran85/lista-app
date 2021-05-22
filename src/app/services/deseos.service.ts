import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})

export class DeseosService {

  public listas: Lista[] = [];

  constructor(){
    this.leerStorage();
/*     const lista1 = new Lista('Primera tarea a realizar');
    const lista2 = new Lista('Segunda tarea a realizar');
    this.listas.push(lista1, lista2); */
  }

  crearLista(titulo: string): number{
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  guardarStorage(): void{
    localStorage.setItem('data',JSON.stringify(this.listas));
  }

  leerStorage(): void{
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }
}
