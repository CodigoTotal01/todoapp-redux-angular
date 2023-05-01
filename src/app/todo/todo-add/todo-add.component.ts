import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";

import * as fromTodo from '../todo.actions'
import {AgregarTodoAction} from "../todo.actions";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [
  ]
})
export class TodoAddComponent implements OnInit {
 //? (!) Esto indica al compilador que estamos seguros de que la propiedad se inicializará antes de su uso.
  txtInput!: FormControl ;

  //Solicitara el etado de la aplciacion el store
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.txtInput = new FormControl('', Validators.required)
  }

  agregarTodo(){

    if(this.txtInput.invalid){
      return;
    }

    const accion = new fromTodo.AgregarTodoAction(this.txtInput.value);
    this.store.dispatch(accion);
    this.limpiarInput();

  }


  limpiarInput(){
    this.txtInput.setValue('');
  }

}




//nota: basicamente el operador ! - El operador ! se conoce como operador de "confianza no nula" o "assertion de no nulidad".
// si el compilador no esta seguro si vendra o no se le pone esto porque nosotros si sabemos que ocurrira


//recuerda importar en la apliacion genera el modulo de formularios reactivos
