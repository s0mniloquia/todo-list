import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroToDoPipe } from './filtro-to-do.pipe';



@NgModule({
  declarations: [FiltroToDoPipe],
  exports: [FiltroToDoPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
