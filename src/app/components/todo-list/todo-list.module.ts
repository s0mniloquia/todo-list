import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoItemModule } from '../todo-item/todo-item.module';



@NgModule({
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
  imports: [
    CommonModule,
    TodoItemModule
  ]
})
export class TodoListModule { }
