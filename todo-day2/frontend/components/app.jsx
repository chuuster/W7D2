import React from 'react';
import { TodoListContainer } from './todos/todo_list_container.jsx';

export const App = (props) => {
  return (
    <div>
      <h1>Todos App</h1>
      <TodoListContainer />
    </div>
  );
};
