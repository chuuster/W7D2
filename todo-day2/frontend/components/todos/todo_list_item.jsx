import React from 'react';

export const TodoListItem = (props) => {
  return (
    <li>
      <h3>{props.todo.title}</h3>
      <p>{props.todo.body}</p>
    </li>
  );
};
