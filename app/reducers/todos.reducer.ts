import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';
import { Todo, TodoState, TodoEntity } from '../interfaces';

const initialState: TodoState = {
    ids: [],
    entities: {},
    selectedId: null
};

export function TodoReducer(state = initialState, action: Action): TodoState {
    switch (action.type) {
        case 'LOAD':
            const todos = action.payload;
            const newTodos = todos.filter((todo) => !state.entities[todo.id]);
            const newTodoIds = newTodos.map((todo) => todo.id);
            const newTodoEntities = newTodos.reduce((entities: TodoEntity, todo: Todo) => {
                return Object.assign(entities, { [todo.id]: todo });
            });

            return {
                ids: [...state.ids, ...newTodoIds],
                entities: Object.assign({}, state.entities, newTodoEntities),
                selectedId: state.selectedId
            };
        case 'INSERT':
            const todo = action.payload;

            if (state.ids.indexOf(todo.id) > -1) {
                return state;
            }

            return {
                ids: [...state.ids, todo.id],
                entities: Object.assign({}, state.entities, { [todo.id]: todo }),
                selectedId: state.selectedId
            };

        case 'SELECT':
            return {
                ids: state.ids,
                entities: state.entities,
                selectedId: action.payload
            };

        case 'UPDATE':
            //

        default: {
            return state;
        }
    }
}

export const getEntities = (state: TodoState) => state.entities;
export const getIds = (state: TodoState) => state.ids;
export const getSelectedId = (state: TodoState) => state.selectedId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});
export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map((id) => entities[id]);
});
