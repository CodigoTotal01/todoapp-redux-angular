import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import {Todo} from "../model/todo.model";
import * as fromFiltro from '../../filter/filter.actions'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtro!: fromFiltro.filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //notificara cuando el state cambie
    this.store.subscribe(state =>{
      this.todos = state.todos;
      this.filtro = state.filtro
    });
  }

}
