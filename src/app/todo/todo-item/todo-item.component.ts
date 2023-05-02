import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../model/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import {ToggleTodoAction, EditarTodoAction, BorrarTodoAction} from "../todo.actions";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ]
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;

  // Referenciar elemento #, es como jquery
  @ViewChild('txtInpoutFisico') txtInputFisico!: ElementRef;

  chkField!: FormControl;
  txtInput!: FormControl;
  editando: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required)

  //detectar cambios del check
    this.chkField.valueChanges
      .subscribe(() => {
          const accion = new ToggleTodoAction(this.todo.id);
          this.store.dispatch(accion);
        }
      )

  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1)

  }
  // blur dcuando se peuirde el foco
  terminarEdicion() {
    this.editando = false;
    const accion = new EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(accion);

  }

  borrarTodo() {
    const accion = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }
}
