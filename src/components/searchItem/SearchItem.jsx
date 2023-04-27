import './searchItem.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

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
    navigate(`/hotels/${hotel._id}`, { state: { date, options } });
  };
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

          <button onClick={handleSearch} className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
