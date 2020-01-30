import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';

import { TodoListModule } from '../todo-list/todo-list.module';
import { TodoFooterModule } from '../todo-footer/todo-footer.module';
import { TodoAddModule } from '../todo-add/todo-add.module';



@NgModule({
  declarations: [TodoComponent],
  exports: [TodoComponent],
  imports: [
    CommonModule,
    TodoAddModule,
    TodoListModule,
    TodoFooterModule
  ]
})
export class TodoModule { }
