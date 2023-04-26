<<<<<<< HEAD
import { combineReducers } from 'redux';
import hotelreducer from './reducer';
import heartToggleReducer from './toggleReduce';
import searchReducer from './searchReducer';
import getOneHotel from './onehotel';
export default combineReducers({
  hotels: hotelreducer,
  search: searchReducer,
  onehotel: getOneHotel,
  haertToggleReducer: heartToggleReducer,
});
=======
import { combineReducers } from "redux";
import hotelreducer from "./reducer";
import searchReducer from "./searchReducer";
import getOneHotel from "./onehotel";
export default combineReducers ({
    hotels: hotelreducer,
    search: searchReducer,
    onehotel:getOneHotel,
})
>>>>>>> 28180dc3fe20d4c94e003f2d778714e9bdfbe011
