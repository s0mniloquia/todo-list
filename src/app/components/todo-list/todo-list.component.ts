import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/todo.model';
import { AppToDo } from 'src/app/todo.state';
import { Store } from '@ngrx/store';
import { filtrosPermitidos } from '../redux/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  public toDoList: ToDo[] = [];
  public filtroActual: filtrosPermitidos;

  constructor(public store: Store<AppToDo>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.toDoList = state.toDo;
      this.filtroActual = state.filtro;
    });
  }


}
