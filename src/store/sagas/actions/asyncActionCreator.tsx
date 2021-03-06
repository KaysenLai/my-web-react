import * as actions from './asyncActionTypes';
import { Action } from '../../../types';

export const asyncRequestTodoList = (): Action => ({
  type: actions.REQUEST_TODO_LIST,
});

export const asyncRequestOneTodo = (todoId: number): Action<number> => ({
  type: actions.REQUEST_ONE_TODO,
  payload: todoId,
});

export const asyncRequestDefaultTodo = (): Action => ({
  type: actions.REQUEST_DEFAULT_TODO,
});
