import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from "./store/store.js";
import { App } from './components/app.jsx';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", function(event) {
  const store = configureStore();
  const rootElement = document.getElementById("content");
  window.rootElement = rootElement;
  ReactDOM.render(<Root store={store}/>, rootElement);
});
