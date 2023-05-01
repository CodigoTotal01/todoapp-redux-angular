import {Action} from "@ngrx/store";
//Fuentes de informacion - y son acciones
export const AGREGAR_TODO = '[TODO] Agregar todo';

export class AgregarTodoAction implements Action{
  readonly type = AGREGAR_TODO;
  //informacion a enviar
  constructor(public texto:string) {
  }
}

//Estructura de informacion personalizada
export type Actiones = AgregarTodoAction;
