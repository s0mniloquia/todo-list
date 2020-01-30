import { filtrosPermitidos, COMPLETADAS, acciones, SET_FILTRO, TODOS } from './filter.actions';

const filtroInicial: filtrosPermitidos = TODOS;

export function filterReducers(state= filtroInicial, action: acciones ): filtrosPermitidos {
    switch ( action.type ) {
        case SET_FILTRO:
            return action.payload.filtro;
        default:
            return state;
    }
}
