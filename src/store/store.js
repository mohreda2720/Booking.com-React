import { legacy_createStore as createStore } from "redux";
import hotelreducer from "./reducers/reducer";
import { applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const store=createStore(hotelreducer,applyMiddleware(thunk))
export default store