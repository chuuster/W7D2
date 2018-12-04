import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
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

        <input type="submit">Create Step!</input>
      </form>
    );
  }
}
