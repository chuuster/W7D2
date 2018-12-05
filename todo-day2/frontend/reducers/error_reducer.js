import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/error_actions.js";

const errorReducer = (state=[], action) => {
  let newState = [];
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors.slice();
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorReducer;
