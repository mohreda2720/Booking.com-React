import { combineReducers } from "redux";
import hotelreducer from "./reducer";
import searchReducer from "./searchReducer";
import userReducer from "./loginRegister";
import heartToggleReducer from './toggleReduce';
import cityreducer from './citiesReducer';

export default combineReducers({
    hotels: hotelreducer,
    search: searchReducer,
    users: userReducer,
    haertToggleReducer: heartToggleReducer,
    cities: cityreducer,
})
