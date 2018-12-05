import * as TodoAPIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions.js';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

// dispatch(fetchTodos())
// fetchTodos() returns :
//    function (dispatch) {
//      return TodoAPIUtil....
//   }
//
// thunk will invoke this function: x(dispatch) -> AJAX request (returns a promise)

// container
// mDP = (dispatch) => ({
//  fetchTodosProp: () => dispatch(fetchTodos())
// })
export const fetchTodos = () => (dispatch) => {
  return TodoAPIUtil.fetchTodos()
    .then(todosData => dispatch(receiveTodos(todosData)));
};

export const createTodo = (todo) => (dispatch) => {
  return TodoAPIUtil.createTodo(todo)
    .then(
      todoData => dispatch(receiveTodo(todoData)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
};

window.createTodo = createTodo;
