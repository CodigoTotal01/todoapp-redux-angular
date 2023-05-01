import * as fromTodo from './todo.actions';
import {Todo} from "./model/todo.model";
import {from} from "rxjs";

//informacion
const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar a el mundo');


//Estado de los todos
const estadoInicial: Todo[] = [todo1, todo2]; // ahro ael estaod inicial tiene dos elementos
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
