import { combineReducers } from "redux";
import hotelreducer from "./reducer";
import searchReducer from "./searchReducer";

export default combineReducers ({
    hotels: hotelreducer,
    search: searchReducer
})