import React from 'react';
import { TodoListItem } from "./todo_list_item.jsx";

export default () => (<h3>todo list goes here</h3>);

export const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((el, idx) => (
        <TodoListItem todo={el} key={el.id} />
      ))}
    </ul>
  );
};
