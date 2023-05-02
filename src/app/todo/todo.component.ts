import { Component, OnInit } from '@angular/core';
import {ToggleAllTodoAction} from "./todo.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../app.reducers";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  completado:boolean = false;
  // "store" se refiere a un objeto que actúa como un contenedor para el estado de la
  // aplicación y proporciona una interfaz para acceder y actualizar el estado.
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.completado = !this.completado;
    const accion = new ToggleAllTodoAction(this.completado);
    this.store.dispatch(accion);
  }
}
