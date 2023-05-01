import axiosConfig from '../../axiosConfig/axiosConfig';

export default function postReservation(reservationData){
    return (dispatch)=>{
     return   axiosConfig.post("/booking", reservationData).then((res) => {
            dispatch({type:"ADD_RESERVATION", payload:res.data})
        })
            .catch((err) => {
                console.log(err);
            })
        }
 }

 export function getReservation(){
    return (dispatch)=>{
     return   axiosConfig.post("/booking").then((res) => {
            dispatch({type:"GET_ALL_RESERVATION", payload:res.data})
        })
            .catch((err) => {
                console.log(err);
            })
        }
 }