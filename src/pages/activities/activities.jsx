// import "./activities.css";
import getActivities from '../../store/actions/activities';
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// const Activities = () => {

// const dispatch = useDispatch()
// useEffect(()=>{
//     dispatch( getActivities())
// },)
//   return (
//     <>
//     <div className="bg-dark">
//     {Acti.map(function (activ) {
//                     return <div key={activ._id}>
//               <div className="featuredItem  ">
//           <img
//           className=" m-4 featuredImg" variant="top"
//             src={activ.MainImage[0]}
//             alt=""

//           />
//            <div className="featuredTitles ms-3">
//             <h5>{activ.Name}</h5>
//             <h6>
//               {" "}

//                {}{" "}
//             </h6>
//           </div>
//             </div>

//             </div>
//     })}
//         </div>
//         </>
//   );
// };

// export default Activities;

/////
import React, { useEffect, useState } from 'react';
import './activities.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import Activity from '../../components/activity/activity';
import { useSelector, useDispatch } from 'react-redux';
import searchByCity from '../../store/actions/searchAction';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

const Activities = () => {
  const location = useLocation();

  const [date, setDate] = useState(location.state?.date || '');
  const [options, setOptions] = useState(location.state?.options || {});
  const [openDate, setOpenDate] = useState(false);
  const Acti = useSelector((state) => state.activities.getactivities);
  const hotelsByCity = useSelector((state) => state.search.hotelsByCity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchByCity());
  }, []);

  useEffect(() => {
    dispatch(getActivities());
  });

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              {/* <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span> */}
              {/* {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )} */}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per nigth</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per nigth</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  {/* <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  /> */}
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  {/* <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  /> */}
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  {/* <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  /> */}
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <div>{hotelsByCity.length}</div>
            {Acti.map((hotel) => (
              <Activity hotel={hotel} key={hotel._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Activities;
