import React from 'react';

export class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateTodo = this.updateTodo.bind(this);
    }

  updateTodo(event) {
    const todo = Object.assign({}, this.props.todo);
    todo.done = !todo.done;
    this.props.receiveTodo(todo);
  }

  render() {
    return (
      <li>
        <h3>{this.props.todo.title}</h3>
        <p>{this.props.todo.body}</p>
        <button onClick={() => this.props.removeTodo(this.props.todo)}>
        Delete Todo
        </button>

        <button onClick={this.updateTodo}>
          {this.props.todo.done ? "Undo" : "Mark Done"}
        </button>
      </li>
    );
  }
}
