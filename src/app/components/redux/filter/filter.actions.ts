import { ModificarEstadoTodosAction } from '../todo/todo.actions';
import { Action } from '@ngrx/store';

export const COMPLETADAS = 'Completadas';
export const PENDIENTES = 'Pendientes';
export const TODOS = 'Todos';
export const SET_FILTRO = '[Filter ] Set filter';

export type filtrosPermitidos = 'Completadas' | 'Pendientes' | 'Todos';

export class SetFiltroAction implements Action {
    readonly type = SET_FILTRO;
    public payload;
    constructor( filtroNuevo: filtrosPermitidos) {
        this.payload = { filtro: filtroNuevo };
    }
}

export type acciones = SetFiltroAction;
