import "./tourProperties.css";
import getTours from "../../store/actions/tours"
import { useDispatch,useSelector } from "react-redux";
import {useEffect} from "react"

const TourProperties = () => {
  const dispatch = useDispatch() 
  const Tour = useSelector ((state) => state.tours.gettours)
  useEffect(()=>{
    dispatch( getTours ());
},)
  return (
    <>
    <div>this is the tours section</div>
    <div className="fp">
    {Tour.map(function(tour){
      return <div key={tour._id}>

        <div className="fpItem"> 
            <img className="fpImg" variant="top" src={tour.TourImages[0]} alt=""></img>
        </div>
        <span className="fpCity">{tour.City.CityName}</span>
        <span className="fpName">{tour.Name}</span>
        <p className="fpPrice"><span>EGP </span>{tour.TicketPrice}</p>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
        </div>
      })}

</div>

  </>
  );
};

export default TourProperties;
