import "./booking.css";
import { json, useParams } from "react-router-dom";
import queryString from 'query-string';

const Booking = () => {
 // const [reservation, setReservation] = useState({
  //   hotelData: "",
  //   checkInDate: "",
  //   checkOutDate: "",
  //   totalCost: "",
  //   customerName: "",
  //   customerEmail: "",
  //   paymentStatus: "",
  //   paymentId: "",
  // })
    const { reservationDataStr } = useParams();
    const reservationData = JSON.parse(decodeURIComponent(reservationDataStr));

    console.log(reservationData);

    const token  = localStorage.getItem('token')
    if(token){

    }
    // const ay7aga = queryString.parse(params); 
    //   console.log(params); 
    return (
        <div className="mail">
            <h1 className="mailTitle">Save time, save money!</h1>
            <span className="mailDesc">
                Sign up and we'll send the best deals to you
            </span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    );
};


export default Booking;