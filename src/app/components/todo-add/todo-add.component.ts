import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { AppToDo } from 'src/app/todo.state';
import { AgregarTareaAction } from '../redux/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {
  inputTxt: FormControl;

  constructor(private store: Store<AppToDo>) {
    this.inputTxt = new FormControl('', Validators.required);
  }

  ngOnInit() {
    this.store.subscribe( state => console.log(state));
  }

  cambioFoco = () => {
    console.log(this.inputTxt.value);
    const accion = new AgregarTareaAction(this.inputTxt.value);
    this.store.dispatch( accion );
    this.inputTxt.setValue('');
  }
}
