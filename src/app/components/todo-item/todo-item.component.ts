import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ToDo } from 'src/app/model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppToDo } from 'src/app/todo.state';
import { Store } from '@ngrx/store';
import { ModificarEstadoAction, ModificarTareaAction, EliminarTareaAction } from '../redux/todo/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() toDo: ToDo;
  @ViewChild('inputEditing', {static: false}) inputEditing: ElementRef;
  public editarInput = false;
  inputTxtEdit: FormControl;
  checkboxField: FormControl;

  constructor(private store: Store<AppToDo>) {}

  ngOnInit() {
    this.inputTxtEdit = new FormControl(this.toDo.texto, Validators.required);
    this.checkboxField = new FormControl(this.toDo.completada);
    this.checkboxField.valueChanges.subscribe(value => {
      const accion = new ModificarEstadoAction(this.toDo.id);
      this.store.dispatch(accion);
      this.toDo.completada = true;
    });
  }

  habilitarEdicion = () => {
    console.log(`Elegido el ${this.toDo.id}`);
    this.editarInput = true;
    setTimeout(() => this.inputEditing.nativeElement.select(), 0);
  }
  
  deshabilitarEdicion = () => {
    this.editarInput = false;
    if (this.inputTxtEdit.valid) {
      const accion = new ModificarTareaAction( this.inputTxtEdit.value, this.toDo.id );
      this.store.dispatch(accion);
    }
  }

  eliminarTarea = () => {
    const accion = new EliminarTareaAction( this.toDo.id);
    this.store.dispatch(accion);
  }

}
