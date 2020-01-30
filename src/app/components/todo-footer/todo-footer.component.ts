import { Component, OnInit } from '@angular/core';
import { AppToDo } from 'src/app/todo.state';
import { Store } from '@ngrx/store';
import { EliminarTareasCompletadasAction } from '../redux/todo/todo.actions';
import { filtrosPermitidos, COMPLETADAS, PENDIENTES, TODOS, SetFiltroAction } from '../redux/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosPermitidos: filtrosPermitidos[] = [COMPLETADAS, PENDIENTES, TODOS];
  filtroActivo: filtrosPermitidos;
  total: number;

  constructor(private store: Store<AppToDo>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      debugger;
      this.filtroActivo = state.filtro;
      this.actualizarTotal(state.toDo);
    } );
  }

  borrarCompletadas = () => {
    const accion = new EliminarTareasCompletadasAction();
    this.store.dispatch( accion );
  }

  actualizarTotal = ( listaTodos ) => {
    switch ( this.filtroActivo ) {
      case COMPLETADAS:
        this.total = listaTodos.filter( todo => todo.completada ).length;
        break;
      case PENDIENTES:
        this.total = listaTodos.filter( todo => !todo.completada ).length;
        break;
      default:
        this.total = listaTodos.length;
    }
  }

  seleccionarFiltro = (filtro: filtrosPermitidos) => {
    debugger;
    const accion = new SetFiltroAction(filtro);
    this.store.dispatch( accion );
  }

}
