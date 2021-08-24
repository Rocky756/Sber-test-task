import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import { reducer } from "./redux/reducers";
import { initialStore } from "./redux/init";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  initialStore,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

