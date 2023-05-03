const Initial_state = {
    allReservations: [],
    reservation: {},
}

export default function reservationReducer(state = Initial_state, action) {
    switch (action.type) {
        case "ADD_RESERVATION":
            return { ...state, reservation: action.payload }
        case "GET_ALL_RESERVATION":
            return { ...state, allReservations: action.payload };
        default:
            return state
    }
}