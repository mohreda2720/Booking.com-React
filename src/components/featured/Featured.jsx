import "./featured.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sethotel from "../../store/actions/action";

const Featured = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const hotels = useSelector((state)=> state.hotels.gethotels)

  useEffect(()=>{
    dispatch( sethotel(page))
},)


  return (
    
    <div className="featured">
      <>
      <div className="d-flex ">
                {hotels.map(function (allhotels) {
                    return <div key={allhotels._id}>
              <div className="featuredItem  ">
          <img
          className=" m-4 featuredImg" variant="top"
            src={allhotels.HotelImg}
            alt=""
           
          />
          <div className="featuredTitles ms-3">
            <h5>{allhotels.name}</h5>
            <h6>
              {" "}
              {allhotels.Address.City},
          
               {allhotels.Address.Country}{" "}
            </h6>
          </div>
        </div>

                        </div>
                          })}
            </div>
        {/* <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/26136872.jpg?k=9e1ccdbdeca1c1f2b3b570498db2ef0823d2f342fdb4f910cc618e5ab52a9944&o=&hp=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h6>The Montcalm At Brewery London City</h6>
            <p>
              {" "}
              52 Chiswell Street, City of London, London, EC1Y 4SB, United
              Kingdom{" "}
            </p>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/135052788.jpg?k=455a358cb057c720eb1f14a381d191c9330af26133b77399c79fb1b9d8d7c3a0&o=&hp=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h6>The Chilworth London Paddington</h6>
            <p>
              55 Westbourne Terrace, Paddington, London, Westminster Borough,
              London, W2 3UY, United Kingdom
            </p>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/155822591.jpg?k=ffbe601b947a7aa2538fe21785916a9740120c0b49a586994366a833ecd9b55f&o=&hp=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h6>The Z Hotel Tottenham Court Road</h6>
            <p>
              {" "}
              52 Poland Street, Westminster Borough, London, W1F 7NH, United
              Kingdom
            </p>
          </div>
        </div> */}
      </>
    </div>
  );
};
export default Featured;
