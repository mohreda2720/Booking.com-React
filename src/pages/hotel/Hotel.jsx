import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem";

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import axiosConfig from './../../axiosConfig/axiosConfig';
import { useParams } from 'react-router-dom';
import Reserve from "../../components/reserve/Reserve";
import searchItem from "../../components/searchItem/SearchItem";
import sethotel from '../../store/actions/action';

const Hotel = () => {
   const hotelllll = useSelector((state) => state.hotels.gethotels);
  // console.log(hotelllll);
  

  // const [dates, setDate] = useState(location.state.date)

  
    const location = useLocation();

    //  const [dates, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    // const [options, setOptions] = useState(location.state.options)
    // const hotelsByCity = useSelector((state) => state.search.hotelsByCity)
    // const dispatch = useDispatch()

  


  const [hotels, sethotels] = useState([]);
  const { id } = useParams();
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [photos1, setphotos1] = useState([]);
  const [address1, setaddress1] = useState({});
  const [room1, setroom1] = useState([]);
 
  const [date, setDate] = useState(location.state.date)

  const hotelll = hotelllll.find((hotel) => hotel._id == `${id}`)
//   useEffect(() => {
//     const hotelll = hotelllll.find((hotel) => hotel._id == `${id}`)
console.log(hotelll);
//     axiosConfig
//       .get(`hotels/${id}`)
//       .then((res) => {
//         // console.log(res.data);
//         sethotels(res.data);
//         setphotos1(res.data.HotelImages);
//         setaddress1(res.data.Address);
//         setroom1(res.data.SingleRooms["RoomType"]);
//         // console.log(photos1);
//         // console.log(address1);
//         // console.log(res.data.Address);
//         // console.log(res.data.Address.City);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  // const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  // function dayDifference(date1, date2) {
  //   const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  //   const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  //   return diffDays;
  // }

  // const days = dayDifference(dates[0].endDate, dates[0].startDate);
  // setDate([dates[0].endDate, dates[0].startDate])
  // console.log(dates);
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? hotelll.HotelImages.length-1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === hotelll.HotelImages.length-1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
const handleClick = () => {
  setOpenModal(true)
}
  return (
    
    <div>
      
      <Navbar />
      
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove('l')}
            />
            <div className="sliderWrapper">
              <img
                src={hotelll.HotelImages[slideNumber]}
                alt=""
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle"> {hotelll.name} </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span> {hotelll.Address.Street},</span>
            <span> {hotelll.Address.City},</span>
            <span> {hotelll.Address.Country}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {hotelll.HotelImages.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                {hotelll.name} Stay in the heart of City
              </h1>
              <p className="hotelDesc">
                {' '}
                {hotelll.HotelDescription}
                {/* Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service. */}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b> ${hotelll.SSRoomPrice}</b> (9 nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <div>
        <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">RoomType</th>
      <th scope="col">Room Size</th>
      <th scope="col">BedType</th>
    </tr>
  </thead>
  
                     
                     
  <tbody>
    <tr>
      <th scope="row">1</th>
      {/* <td> {hotels.SingleRooms.BedType}</td> */}
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      {/* <td> {hotels.DoubleRooms.BedType}</td> */}
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      {/* <td>  {hotels.TripleRooms.BedType}</td> */}
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

        </div>
        <MailList />
        <Footer />
      </div>
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>} 
    </div>
  );
};

export default Hotel;
