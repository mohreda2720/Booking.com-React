import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import bcrypt from "bcryptjs";
import { getAllUser, loginUser } from "../../store/actions/loginRegister";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const allUsers = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Dispatch getAllUsers to get all users from the database
  useEffect(() => {
    dispatch(getAllUser());
  });

  const handleLogin = (e) => {
    // e.preventDefault();

     const user = allUsers.find((user) => user.userEmail === userData.userEmail);
     console.log(user)
    // if (!user) {
    //   alert("Invalid name or password");
    //   return;
    // }

    // // Compare the hashed password in the database with the hashed user input password
    // const isMatch = bcrypt.compareSync(
    //   userData.userPassword,
    //   user.userPassword
    // );
    // if (!isMatch) {
    //   alert("Invalid name or password");
    //   return;
    // }

    // alert("Login successful");
    dispatch(loginUser(userData, JSON.stringify(user)));
    navigate("/");
  };

  return (
    <div id="appLogin">
      <Form onSubmit={handleLogin} id="login">
        <Form.Group className="mb-3" controlId="formBasicName" id="lContainer">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={userData.userEmail}
            onChange={(e) =>
              setUserData({ ...userData, userEmail: e.target.value })
            }
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" id="lContainer">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={userData.userPassword}
            onChange={(e) =>
              setUserData({ ...userData, userPassword: e.target.value })
            }
          />
          <Form.Check
            type="checkbox"
            label="Show password"
            onClick={() => setShowPassword(!showPassword)}
            id="showPasswordCheckbox"
          />
        </Form.Group>

        <Button variant="primary" type="submit" id="lButton">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginComponent;
