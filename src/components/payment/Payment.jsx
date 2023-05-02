import "./payment.css";
import { json, useParams } from "react-router-dom";
import getonehotel from "../../store/actions/oneHotel"
import { useSelector , useDispatch } from "react-redux";
import SearchItem from "../../components/searchItem/SearchItem";
import { useEffect } from "react";

const Payment = () => {
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
const id = reservationData.hotelId;
console.log(id);
    console.log(reservationData);

    const token  = localStorage.getItem('token')
    if(token){

    }
     
  const dispatch = useDispatch()
  const theHotel = useSelector((state) => state.getoneHotel.getonehotel);
  console.log(theHotel);
  useEffect(() => {
    dispatch(getonehotel(id))
  console.log(theHotel);
   
 },[])
    // const ay7aga = queryString.parse(params); 
    //   console.log(params); 
    return (
      <>
      <div className="container">
        <div className="row">
      <div className="col-4">
        <div className="card">Card 1
        </div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
       
      </div>
      <div className="col-8">
     
        </div>
    
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
        <div class="card">Card 4</div>
        <div class="card">Card 5</div>
        <div class="card">Card 6</div>
        <div class="card">Card 7</div>
        <div class="card">Card 8</div>
        <div class="card">Card 9</div>
        <div class="card">Card 10</div>
        <div class="card">Card 11</div>
        <div class="card">Card 12</div>
        <div class="card">Card 13</div>
        <div class="card">Card 14</div>
        <div class="card">Card 15</div>
        <div class="card">Card 16</div>
      </div>
    
   </div>
    </>
    );
};


export default Payment;