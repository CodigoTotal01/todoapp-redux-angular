import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "../todo/model/todo.model";

import * as fromFiltro from './filter.actions'


@Pipe({
  name: 'filterPipeTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFiltro.filtrosValidos): Todo[] {
    // console.log(todos)
    // console.log(fE

    switch (filtro){
      case 'completados':
        return todos.filter(todos => todos.completado);
      case 'pendientes':
        return todos.filter(todos => !todos.completado);
      default:
        return todos;
    }
    return todos;
  }

}
