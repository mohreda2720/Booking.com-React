import "./searchItem.css";
import { Link } from 'react-router-dom';

const SearchItem = ({ hotel }) => {
  return (
    <div className="searchItem">
      {/* <img
        src={hotel.HotelImg}
        alt=""
        className="siImg"
      /> */}
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
        </div>
      </div>
    </div>
  );
}



export default SearchItem;
