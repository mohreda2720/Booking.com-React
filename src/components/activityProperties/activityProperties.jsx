import "./activityProperties.css";
import getActivities from "../../store/actions/activities"
import { useDispatch,useSelector } from "react-redux";
import {useEffect} from "react"

const ActivityProperties = () => {
  const dispatch = useDispatch() 
  const activities = useSelector ((state) => state.activities.getactivities)
  useEffect(()=>{
    dispatch( getActivities ());
},)
  return (
    <>
    <div>this is the activities section</div>
    <div className="fp">
    {activities.map(function(activity){
      return <div key={activity._id}>

        <div className="fpItem"> 
            <img className="fpImg" variant="top" src={activity.MainImage[0]} alt=""></img>
        </div>
        {/* <span className="fpCity">{activity.City.CityName}</span> */}
        <span className="fpName">{activity.Name}</span>
        {/* <p className="fpPrice"><span>EGP </span>{tour.TicketPrice}</p> */}
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

export default ActivityProperties;
