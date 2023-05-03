import "./userProfile.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {getReservationByUser} from "../../store/actions/reservation";

const UserProfile = () => {
    const data = useSelector((state) => state.reservations.allUserData);
    const dispatch = useDispatch();
    const currentUser = localStorage.getItem("loggedUser");
    const userObject = JSON.parse(currentUser);
    const id = userObject._id
    console.log(id)

    useEffect(() => {
        dispatch(getReservationByUser(id))
        console.log(data);
    })
}

export default UserProfile;