import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';  //asyn action
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from './reducers';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) //middleware to build asyn action such as API call

ReactDOM.render(
  //pass down from global state 
  <React.StrictMode>
 <Provider store={store}> 
    <App />
  </Provider></React.StrictMode>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals