import React from 'react';
import { uniqueId } from '../../util/utils.js'
export class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.description,
      done: false
    };

    debugger
    this.props.receiveTodo(todo);
  }

  render() {
    return (
      <form>
        <label>Title:
        <input type="text" name="title"
          value={this.state.title}
          onChange={this.handleInputChange} />
        </label>

        <label>Description:
        <input type="text" name="description"
          value={this.state.description}
          onChange={this.handleInputChange} />
        </label>

        <input type="submit" value="Create Step!" onClick={this.handleSubmit}></input>
      </form>
    );
  }
}
