import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../model/todo.model";
import {FormControl, Validators} from "@angular/forms";

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
  constructor() { }

  ngOnInit(): void {

    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required)

    console.log(this.todo)
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
  }
}
