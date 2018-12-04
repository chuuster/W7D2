import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from "../reducers/root_reducer.js";
import thunk from "../middleware/thunk.js";

export const configureStore = () => {
  const store = createStore(rootReducer, {}, applyMiddleware(thunk));
  window.store = store;
  return store;
};
