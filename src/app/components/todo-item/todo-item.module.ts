import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodoItemComponent],
  exports: [TodoItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TodoItemModule { }
