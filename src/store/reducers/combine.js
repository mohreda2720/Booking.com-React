import { combineReducers } from "redux";
import hotelreducer from "./reducer";
import searchReducer from "./searchReducer";
import userReducer from "./loginRegister";

export default combineReducers({
    hotels: hotelreducer,
    search: searchReducer,
    users: userReducer

})