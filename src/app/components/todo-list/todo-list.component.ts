import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/todo.model';
import { AppToDo } from 'src/app/todo.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  public toDoList: ToDo[] = [];

  constructor(public store: Store<AppToDo>) { }

  ngOnInit() {
    debugger;
    this.store.subscribe( state => this.toDoList = state.toDo);
  }

  

}
