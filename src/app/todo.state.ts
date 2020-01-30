import { ToDo } from './model/todo.model';
import { filtrosPermitidos } from './components/redux/filter/filter.actions';
import { ActionReducerMap } from '@ngrx/store';
import { reducerToDo } from './components/redux/todo/todo.reducers';
import { filterReducers } from './components/redux/filter/filter.reducers';

export interface AppToDo {
    toDo: ToDo[];
    filtro: filtrosPermitidos;
}

export const reducers: ActionReducerMap<AppToDo> = {
    toDo: reducerToDo,
    filtro: filterReducers
};

