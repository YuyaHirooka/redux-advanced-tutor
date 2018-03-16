import React from 'react';
import ReactDOM from 'react-dom';
import {thunkMiddleware} from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducer/reducers'
import {fetchPosts} from "./action/action";


const loggerMiddleware =createLogger
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
)

store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPosts('reactjs'))
    .then(()=>console.log(store.getState))

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
