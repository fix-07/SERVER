import { createStore, applyMiddleware, compose } from 'redux';
import userReducer from './reduc';
import {thunk} from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(userReducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));
  export default store;