<<<<<<< HEAD
import { legacy_createStore as createStore } from 'redux';
import combineReducers from './reducers/combine';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import heartToggleReducer from './reduce/toggleReduce';
const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
=======
import { legacy_createStore as createStore } from "redux";
import combineReducers from './reducers/combine';
import { applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

const store=createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))
export default store
>>>>>>> 28180dc3fe20d4c94e003f2d778714e9bdfbe011
