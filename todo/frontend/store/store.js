import { createStore } from 'redux';
import { rootReducer } from "../reducers/root_reducer.js";

export const configureStore = () => {
  const store = createStore(rootReducer, {});
  window.store = store;
  return store;
};
