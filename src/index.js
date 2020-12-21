import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userReducer from "./store/reducers/user";
import TweetReducer from "./store/reducers/tweet";
import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  user : userReducer,
  tweet : TweetReducer,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
