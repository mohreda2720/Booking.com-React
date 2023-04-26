import axiosConfig from '../../axiosConfig/axiosConfig';

<<<<<<< HEAD
export default function sethotel() {
  return (dispatch) => {
    return axiosConfig
      .get(`/hotels`)
      .then((res) => {
        dispatch({ type: 'GET_hotel', payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
=======


export default function sethotel(page){
   
    return (dispatch)=>{
     return   axiosConfig.get(`/hotels`).then((res) => {
        
            dispatch({type:"GET_hotel", payload:res.data})

        })
            .catch((err) => {
                console.log(err);
            })
        }
 }
>>>>>>> 28180dc3fe20d4c94e003f2d778714e9bdfbe011
