import './searchItem.css';
import { Link } from 'react-router-dom';
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
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
