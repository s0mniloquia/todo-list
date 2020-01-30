import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoItemModule } from '../todo-item/todo-item.module';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
  imports: [
    CommonModule,
    TodoItemModule,
    PipesModule
  ]
})
export class TodoListModule { }
