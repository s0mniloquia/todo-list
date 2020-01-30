import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFooterComponent } from './todo-footer.component';



@NgModule({
  declarations: [TodoFooterComponent],
  exports: [TodoFooterComponent],
  imports: [
    CommonModule
  ]
})
export class TodoFooterModule { }
