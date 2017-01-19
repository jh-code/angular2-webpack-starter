import { createSelector } from 'reselect';
import { Todo, TodoState, State } from '../interfaces';
import * as fromTodo from './todos.reducer';

export const getTodoState = (state: State) => state.todos;

export const getTodoEntities = createSelector(getTodoState, fromTodo.getEntities);
export const getTodoIds = createSelector(getTodoState, fromTodo.getIds);
export const getSelectedTodoId = createSelector(getTodoState, fromTodo.getSelectedId);
export const getSelectedTodo = createSelector(getTodoState, fromTodo.getSelected);
