import * as fromTodo from './todo.actions';
import {Todo} from "./model/todo.model";
import {from} from "rxjs";
import {TOOGGLE_TODO} from "./todo.actions";

//informacion
const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar a el mundo');
todo2.completado = true;
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

    case fromTodo.TOOGGLE_TODO:
      //siempre rompiendo la referencia con js - retornar un arreglo
      return state.map(todoEdit => {
        if(todoEdit.id === action.id){
          return{
            ...todoEdit,
            completado: !todoEdit.completado
          }
        }else{
          return todoEdit;
        }
      })
    case fromTodo.EDITAR_TODO:
      //siempre rompiendo la referencia con js - retornar un arreglo
      return state.map(todoEdit => {
        if(todoEdit.id === action.id){
          return{
            ...todoEdit,
            texto: action.texto
          }
        }else{
          return todoEdit;
        }
      })
    case fromTodo.BORRAR_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.id);
    case fromTodo.TOOGGLE_ALL_TODO:
      return state.map( todoEdit => {
        return {
          ...todoEdit,
          completado: action.completado
        }
      })
    case fromTodo.BORRAR_ALL_TODO:
      return state.filter(todoEdit => !todoEdit.completado);


    default:
      return state;
  }

}
