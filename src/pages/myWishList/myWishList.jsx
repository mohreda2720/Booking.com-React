import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import changeHeart from "../../store/actions/heartToggleAction";
import { useEffect, useState } from "react";
import sethotel from "../../store/actions/action";
import SearchItem from "../../components/searchItem/SearchItem";

const MyWishList = () => {
  useEffect(() => {
    dispatch(sethotel());
  });

  const hotels = useSelector((state) => state.hotels.gethotels);

  const addFav = useSelector((state) => state.haertToggleReducer.favMovies);

  const favoriteHotels = hotels.filter((hotels) => addFav.includes(hotels._id));
  const [movie, setMovie] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sethotel());
  });

  return (
    <div className="listResult">
      {favoriteHotels.map((hotel) => (
        // <SearchItem hotel={hotel} key={hotel._id} />
<div> {hotel.name}</div>
      ))}
    </div>
  );
};

export default MyWishList;
