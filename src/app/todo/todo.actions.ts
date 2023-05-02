import {Action} from "@ngrx/store";
import {Todo} from "./model/todo.model";
//Fuentes de informacion - y son acciones
export const AGREGAR_TODO = '[TODO] Agregar todo';

export const TOOGGLE_TODO = '[TODO] Toogle todo';
export const TOOGGLE_ALL_TODO = '[TODO] Toogle all todo';

export const EDITAR_TODO= '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Eliminar todo';
export const BORRAR_ALL_TODO='[TODO] Eliminar all todo';


export class AgregarTodoAction implements Action{
  readonly type = AGREGAR_TODO;
  //informacion a enviar
  constructor(public texto:string) {}
}

export class ToggleTodoAction implements Action{
  readonly type = TOOGGLE_TODO;
  constructor(public id:number) {}
}


export class ToggleAllTodoAction implements Action{
  readonly type = TOOGGLE_ALL_TODO;
  //Necesitamos saber el estado a poner a las tareas
  constructor(public completado:boolean) {}
}


export class EditarTodoAction implements Action{
  readonly type = EDITAR_TODO;
  constructor(public id:number, public texto:string) {}
}

export class BorrarTodoAction implements Action{
  readonly type = BORRAR_TODO;
  constructor(public id:number) {}
}

export class BorrarAllTodo implements Action{
  readonly type = BORRAR_ALL_TODO;
}

//Estructura de informacion personalizada
export type Actiones = AgregarTodoAction | ToggleTodoAction | EditarTodoAction| BorrarTodoAction | ToggleAllTodoAction | BorrarAllTodo;
