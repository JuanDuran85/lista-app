import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})

export class FiltroCompletadoPipe implements PipeTransform {

  transform(listasArr: Lista[], completada: boolean = true): Lista[] {
    return listasArr.filter(resp => resp.terminada === completada);
  }

}
