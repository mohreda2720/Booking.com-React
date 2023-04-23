import { combineReducers } from "redux";
import hotelreducer from "./reducer";
import searchReducer from "./searchReducer";
import getOneHotel from "./onehotel";
export default combineReducers ({
    hotels: hotelreducer,
    search: searchReducer,
    onehotel:getOneHotel,
})