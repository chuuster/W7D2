import { connect } from "react-redux";
import { TodoList } from "./todo_list.jsx";
import { allTodos } from "../../reducers/selectors.js";
import { receiveTodo, fetchTodos, createTodo, removeTodo } from "../../actions/todo_actions.js";
import { clearErrors } from "../../actions/error_actions.js";

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: (todo) => dispatch(createTodo(todo)),
    clearErrors: () => dispatch(clearErrors()),
    removeTodo: (todo) => dispatch(removeTodo(todo))
  };
};

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
