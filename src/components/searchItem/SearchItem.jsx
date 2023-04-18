import './searchItem.css';
import axiosConfig from './../../axiosConfig/axiosConfig';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sethotel from '../../store/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SearchItem = () => {
  // const [hotels, sethotels] = useState([]);
  // const { id } = useParams()
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const hotels = useSelector((state) => state.gethotels);
  useEffect(() => {
    dispatch(sethotel(page));

    // axiosConfig.get(
    //     `hotels/${id}`).then((res) => {
    //         console.log((res.data)
    //         )
    //         sethotels(res.data)

    //     })
    //         .catch((err) => {
    //             console.log(err);
    //         })
  });

  return (
    <div>
      {hotels.map(function (allhotels) {
        return (
          <div className="searchItem" key={allhotels._id}>
            <Link
              to={`/hotels/${allhotels._id}`}
              className="text-dark"
              style={{ textDecoration: 'none' }}
            >
              <img src={allhotels.HotelImg} alt="" className="siImg" />
            </Link>
            <div className="siDesc">
              <h1 className="siTitle">
                {' '}
                <Link
                  to={`/hotels/${allhotels._id}`}
                  className="text-dark"
                  style={{ textDecoration: 'none' }}
                >
                  {allhotels.name}
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchItem;
