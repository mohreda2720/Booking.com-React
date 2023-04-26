
const Initial_state={
   
    getoneHotel:{},
id:0,
page:1
}
export default function getOneHotel(state=Initial_state,action){
    switch(action.type){
      
        case "GET_ONE_hotel":
            return{...state,getonehotel:action.payload}


            default:
                return state


    }
}
