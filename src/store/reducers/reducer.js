const Initial_state={
<<<<<<< HEAD
    gethotels:[],
=======
   
    gethotels:[],

>>>>>>> d1e0123eb845008f6cb046b341b11de5d04449ae
page:1
}
export default function hotelreducer(state=Initial_state,action){
    switch(action.type){
      
        case "GET_hotel":
            return{...state,gethotels:[...action.payload]}


            default:
                return state
    }
}

