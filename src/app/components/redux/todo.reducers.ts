import {
    actions, AGREGAR_TODO, MODIFICAR_TODO,
    ELIMINAR_TODO, MODIFICAR_ESTADO, MODIFICAR_ESTADO_TODOS,
    ELIMINAR_TODO_COMPLETADOS
} from './todo.actions';
import { ToDo } from '../../model/todo.model';

const estadoInicial: ToDo[] = [];


export function reducerToDo(state: ToDo[] = estadoInicial, action: actions): ToDo[] {
    switch (action.type) {
        case AGREGAR_TODO:
            const toDo: ToDo = new ToDo(action.payload.texto);
            // Clonamos el array de tareas con spread(ES6) y añadimos una nueva tarea
            return [...state, toDo];

        case MODIFICAR_TODO:
            return state.map(element => {
                if (element.id === action.payload.id) {
                    return { ...element, texto: action.payload.texto };
                } else {
                    return { ...element };
                }
            });
        case MODIFICAR_ESTADO:
            return state.map(element => {
                if (element.id === action.payload.id) {
                    return { ...element, completada: !element.completada };
                } else {
                    return { ...element };
                }
            });
        case MODIFICAR_ESTADO_TODOS:
            return state.map(element => {
                return { ...element, completada: action.payload.estado };
            });
        case ELIMINAR_TODO:
            return state.filter(element => element.id !== action.payload.id);

        case ELIMINAR_TODO_COMPLETADOS:
            return state.filter(element => !element.completada);

        default:
            return state;

    }

}
