import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})

export class DeseosService {

  public listas: Lista[] = [];

  constructor(){
    this.leerStorage();
  }

  crearLista(titulo: string): number{
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  borrarLista(lista: Lista){
    this.listas = this.listas.filter(resp => resp.id !== lista.id);
    this.guardarStorage();
  }

  cargarLista(id: string | number): Lista{
    id = Number(id);
    return this.listas.find(dataLista => dataLista.id === id);
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
