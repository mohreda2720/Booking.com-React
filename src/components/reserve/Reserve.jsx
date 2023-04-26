import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/header/Header";
import "./reserve.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import axiosConfig from "../../axiosConfig/axiosConfig"

// import useFetch from "../../hooks/useFetch";
// import { useContext, useState } from "react";
// import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import SearchItem from "../../components/searchItem/SearchItem";
import { useLocation } from "react-router-dom";
import searchByCity from "../../store/actions/searchAction";

const Reserve = ({ setOpen, hotelId }) => {
  
  const hotelllll = useSelector((state) => state.hotels.gethotels);


  const [hotels, sethotels] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const hotelll = hotelllll.find((hotel) => hotel._id == `${id}`)
  console.log(hotelll);
  
  
  
  
  console.log(location);
  const [selectedRooms, setSelectedRooms] = useState([]);
//   const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const data1 = useSelector((state) => state.hotels.gethotels);
  const data = data1.find((hotel) => hotel._id == `${id}`)
   
  const [dates, setDate] = useState(location.state.date)
  console.log(dates);
   const dispatch = useDispatch()
   
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axiosConfig.put(`rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {hotelll.rooms.map((rooms)=>
        (
          <div className="rItem" key={rooms._id}>
            <div className="rItemInfo">
              <div className="rTitle">{rooms.title}</div>
              <div className="rDesc">{rooms.desc}</div>
              <div className="rMax">
                Max people: <b>{rooms.maxPeople}</b>
              </div>
              <div className="rPrice">{rooms.price}</div>
            </div>
            <div className="rSelectRooms">
              
              {rooms.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        )
        )}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
