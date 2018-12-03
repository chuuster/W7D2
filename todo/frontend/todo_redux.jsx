import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from "./store/store.js";

const store = configureStore();
window.store = store;
