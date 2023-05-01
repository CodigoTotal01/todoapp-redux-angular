import * as fromTodo from './todo.actions';
import {Todo} from "./model/todo.model";
import {from} from "rxjs";

//Estado de los todd
const estadoInicial: Todo[] = [];
export function todoReducer(state:Todo[] = estadoInicial,
                            action: fromTodo.Actiones): Todo[]{
  switch (action.type){
    case fromTodo.AGREGAR_TODO:
      //SE retorna el nuevo estado
      const todo = new Todo(action.texto);
      //! El estado actual no se debe mutar siempre un algo neuvo que sirva de estado
      return [...state, todo];

    default:
      return state;
  }

}
