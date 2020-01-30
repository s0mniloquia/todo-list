import { Component, OnInit } from '@angular/core';
import { AppToDo } from 'src/app/todo.state';
import { Store } from '@ngrx/store';
import { ModificarEstadoTodosAction } from '../redux/todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  marcarTodos = false;

  constructor(private store: Store<AppToDo>) { }

  ngOnInit() {
  }

  toggleAll = () => {
    this.marcarTodos = !this.marcarTodos;
    const accion = new ModificarEstadoTodosAction(this.marcarTodos);
    this.store.dispatch( accion );
  }

}
