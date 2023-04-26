import './searchItem.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
// import { AiOutlineHeart, AiFillHeart } from 'react-icons';
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
// import changeHeart from '../../store/actions/heartToggleAction';
import changeHeart from '../../store/actions/heartToggleAction';
import setmovise from '../../store/actions/heartToggleAction';
import sethotel from '../../store/actions/action';

// import {
//   faHeartCirclePlus,
//   faHeart,
//   faHeartBroken,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//

import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
  faStar,
} from '@fortawesome/free-brands-svg-icons';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
//

const SearchItem = ({ hotel }) => {
  useEffect(() => {
    dispatch(sethotel());
  });
  // const favMovie = useSelector((state) => state.setmovie);
  // const favMovie = useSelector((state) => state.haertToggleReducer.favMovies);

  // const dispatch = useDispatch();

  // const handleFav = (moviee) => {
  //   dispatch(changeHeart(moviee));
  // };
  // const favMovie = useSelector((state) => state.hotels.gethotels);
  // const favMovie = useSelector((state) => state.hotels.gethotels);

  // ----------------------------------------------------------------------------------------------------------
  const likesEmoji = {
    liked: <AiFillHeart />,
    unliked: <AiOutlineHeart />,
  };
  // ----------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------
  const addFav = useSelector((state) => state.haertToggleReducer.favMovies);
  const dispatch = useDispatch();
  const [hearts, setHearts] = useState();
  const [render, setRender] = useState(false);
  console.log(addFav);
  const addToFavproites = (id, e) => {
    console.log(id);
    console.log(addFav);
    // console.log(e.target.innerHTML)
    if (addFav.includes(id)) {
      e.target.innerHTML = likesEmoji.unliked;
      setRender((prev) => !prev);
      console.log("yes it's found");
      const newFavArr = addFav.filter((item) => item !== id);
      console.log(addFav);

      return dispatch(changeHeart(newFavArr));
    } else {
      setRender((prev) => !prev);
      e.target.innerHTML = likesEmoji.liked;

      console.log("no it's not found");
      return addFav.push(id);
    }
  };
  const heart = (id) => {
    if (addFav.includes(id)) {
      return true;
    } else {
      return false;
    }
  };
  // ----------------------------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------------------------

=======
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const SearchItem = ({ hotel }) => {

  const location = useLocation();
  const [desnation, setDestnation] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  console.log(location.state.date);
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  const hotelsByCity = useSelector((state) => state.search.hotelsByCity)
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/hotels/${hotel._id}`, { state: {date, options } });
  };
>>>>>>> 28180dc3fe20d4c94e003f2d778714e9bdfbe011
  return (
    <div className="searchItem">
      {/* console.log(favMovie); */}
      <div> </div>
      <Link
        to={`/hotels/${hotel._id}`}
        className="text-dark"
        style={{ textDecoration: 'none' }}
      >
        <img src={hotel.HotelImg} alt="" className="siImg" />
      </Link>
      <div className="siDesc">
        {/* <h1 className="siTitle">{hotel.name}</h1> */}
        <h1 className="siTitle">
          {' '}
          <Link
            to={`/hotels/${hotel._id}`}
            className="text-dark"
            style={{ textDecoration: 'none' }}
          >
            {hotel.name}
          </Link>
        </h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
<<<<<<< HEAD
          <button className="siCheckButton">See availability</button>
          <br />
          <div>
            {' '}
            <button
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                lineHeight: '0',
              }}
              onClick={(e) => addToFavproites(hotel._id, e)}
            >
              {addFav.includes(hotel._id) ? (
                <AiFillHeart />
              ) : (
                <AiOutlineHeart />
              )}
            </button>
          </div>
=======
          <button onClick={handleSearch} className="siCheckButton">See availability</button>
>>>>>>> 28180dc3fe20d4c94e003f2d778714e9bdfbe011
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
