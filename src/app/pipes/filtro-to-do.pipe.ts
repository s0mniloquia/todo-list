import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../model/todo.model';
import { filtrosPermitidos, COMPLETADAS, PENDIENTES } from '../components/redux/filter/filter.actions';

@Pipe({
  name: 'filtroToDo'
})
export class FiltroToDoPipe implements PipeTransform {

  transform(toDos: ToDo[], filtro: filtrosPermitidos): ToDo[] {
    debugger;
    switch ( filtro ) {
      case COMPLETADAS:
        return toDos.filter( toDo => toDo.completada );
      case PENDIENTES:
        return toDos.filter( toDo => !toDo.completada );
      default:
        return toDos;

    }
  }

}
