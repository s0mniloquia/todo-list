import * as actions from './todo.actions';
import { ToDo } from '../../../model/todo.model';

const estadoInicial: ToDo[] = [];


export function reducerToDo(state: ToDo[] = estadoInicial, action: actions.actions): ToDo[] {
    switch (action.type) {
        case actions.AGREGAR_TODO:
            const toDo: ToDo = new ToDo(action.payload.texto);
            // Clonamos el array de tareas con spread(ES6) y añadimos una nueva tarea
            return [...state, toDo];

        case actions.MODIFICAR_TODO:
            return state.map(element => {
                if (element.id === action.payload.id) {
                    return { ...element, texto: action.payload.texto };
                } else {
                    return { ...element };
                }
            });
        case actions.MODIFICAR_ESTADO:
            return state.map(element => {
                if (element.id === action.payload.id) {
                    return { ...element, completada: !element.completada };
                } else {
                    return { ...element };
                }
            });
        case actions.MODIFICAR_ESTADO_TODOS:
            return state.map(element => {
                return { ...element, completada: action.payload.estado };
            });
        case actions.ELIMINAR_TODO:
            return state.filter(element => element.id !== action.payload.id);

        case actions.ELIMINAR_TODO_COMPLETADOS:
            return state.filter(element => !element.completada);

        default:
            return state;

    }

}
