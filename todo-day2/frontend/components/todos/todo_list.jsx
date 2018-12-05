import React from 'react';
import { TodoListItem } from "./todo_list_item.jsx";
import { TodoForm } from "./todo_form.jsx"
import { fetchTodos } from "../../util/todo_api_util.js"

export default () => (<h3>todo list goes here</h3>);

export class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <>
      <TodoForm receiveTodo={this.props.receiveTodo} createTodo={this.props.createTodo}/>
      <ul>
        {this.props.todos.map((el, idx) => (
          <TodoListItem todo={el} key={el.id} />
        ))}
      </ul>
      </>
    );
  }

}
