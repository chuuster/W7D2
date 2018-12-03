import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions.js';
import { allTodos } from "./selectors";

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  let newState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((el, idx) => {
        newState[el.id] = el;
      });
      return newState;
    case RECEIVE_TODO:
      newState = Object.assign({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
