import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[ToDo] Agregar tarea';
export const MODIFICAR_TODO = '[ToDo] Modificar tarea';
export const ELIMINAR_TODO = '[ToDo] Eliminar tarea';
export const MODIFICAR_ESTADO = '[ToDo] Modificar estado';
export const MODIFICAR_ESTADO_TODOS = '[ToDo] Modificar estado todos';
export const ELIMINAR_TODO_COMPLETADOS = '[ToDo] Eliminar tareas completadas';

export class AgregarTareaAction implements Action {
    readonly type = AGREGAR_TODO;
    public payload;
    constructor(textoTodo: string) {
        this.payload = { texto: textoTodo };
    }
}

export class ModificarTareaAction implements Action {
    readonly type = MODIFICAR_TODO;
    public payload;
    constructor(textoTodo: string, idTodo: number) {
        this.payload = { texto: textoTodo, id: idTodo };
    }
}

export class EliminarTareaAction implements Action {
    readonly type = ELIMINAR_TODO;
    public payload;
    constructor(idTodo: number) {
        this.payload = { id: idTodo};
    }
}

export class EliminarTareasCompletadasAction implements Action {
    readonly type = ELIMINAR_TODO_COMPLETADOS;
}

export class ModificarEstadoAction implements Action {
    readonly type = MODIFICAR_ESTADO;
    public payload;
    constructor(idTodo: number) {
        this.payload = { id: idTodo };
    }
}

export class ModificarEstadoTodosAction implements Action {
    readonly type = MODIFICAR_ESTADO_TODOS;
    public payload;
    constructor(estadoTodos: boolean) {
        this.payload = { estado: estadoTodos };
    }
}

export type actions = AgregarTareaAction |
                      ModificarTareaAction |
                      EliminarTareaAction |
                      ModificarEstadoAction |
                      ModificarEstadoTodosAction |
                      EliminarTareasCompletadasAction;


