import "./userProfile.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getReservationByUser } from "../../store/actions/reservation";
import axiosConfig from "../../axiosConfig/axiosConfig"; 
import Form from "react-bootstrap/Form"; 
import Navbar from "../navbar/Navbar";


const UserProfile = () => {
    const data = useSelector((state) => state.reservations.allUserData);
    const dispatch = useDispatch();
    const currentUser = localStorage.getItem("loggedUser");
    const userObject = JSON.parse(currentUser);
    const id = userObject._id
    console.log(userObject);
    const userEmail = userObject.userEmail;
    console.log(userEmail);
    const userName = userObject.userName;
    const userPhone = userObject.userPhone;
    const userImg = userObject.userImg;
    console.log(id)

    useEffect(() => {
        dispatch(getReservationByUser(id))
        console.log(data);
    })



    // useremail= userObject.userEmail; 
    // userName=userObject.userName; 



    useEffect(() => {
        dispatch(getReservationByUser(id))
        console.log(data);


    })

    console.log(data);
    const [userData, setUserData] = useState({
        userEmail: userEmail,
        userName: userName,
        userPhone: userPhone,

    });
    const handleClick = async () => {
        try {
            await Promise.all(

                axiosConfig.patch(`users/${id}`, userData)

            );

            navigate(`/profile`)
        } catch (err) { }
    };


    return (
        <>
            <Navbar></Navbar>
            <div class="container">
                <div class="card ">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <div>
                                <img
                                    style={{ width: "50px", height: "50px" }}
                                    src={userImg}
                                    alt=""
                                    class="rounded-circle"
                                /> <b style={{ color: "blue" }}>Edit your Profile data</b>
                            </div>
                            <Form.Label>Your Name </Form.Label>

                            <Form.Control className="theformI" value={userData.userName} type="text" placeholder="Name" onChange={(e) =>
                                setUserData({ ...userData, userName: e.target.value })
                            } /> </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>

                            <Form.Control className="theformI" value={userData.userEmail} type="email" placeholder="name@example.com" onChange={(e) =>
                                setUserData({ ...userData, userEmail: e.target.value })
                            } /> </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>

                            <Form.Control className="theformI" value={userData.userPhone} type="email" placeholder="name@example.com" onChange={(e) =>
                                setUserData({ ...userData, userPhone: e.target.value })
                            } /> </Form.Group>

                    </Form>

                    <button class="btn bg-info" onClick={handleClick}>Edit </button>
                </div>
            </div>
            {data.map((data) => (

                <div class="card ">
                    <div className="card">
                        <h6>Your booking details</h6>
                        <div className="row">
                            <div className="col-6">
                                Check-In
                                <br />
                                <b>
                                    {data.checkInDate}
                                </b>
                                <br />
                                From 2:00 PM
                                <br />
                                <br />
                            </div>

                            <div className="col-6">
                                {" "}
                                Check-Out
                                <br />
                                <b>
                                    {data.checkInDate}
                                </b>
                                <br />
                                Until 2:00 PM
                            </div>
                            <b>Total lenght of stay:</b>
                            <p> Nights</p>
                        </div>
                    </div>


                    <div >
                        date: {data.checkInDate}

                    </div>


                </div>
            ))}
        </>
    )
}



export default UserProfile;