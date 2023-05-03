import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/loginRegister";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // get current location using useLocation()
  // const currentUser = useSelector((state) => state.users.currentUser);
  const currentUser=JSON.parse(localStorage.getItem("loggedUser"));

  const isLoggedIn = currentUser !== null;

  const dispatch = useDispatch();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="navbarClass">
      <div className="navContainer">
        <span className="logo">BOOKING</span>
        <div className="navItems">
          {isLoggedIn ? (
            <>
              <span className="welcomeMessage">
                Welcome, {currentUser.userName}!
              </span>
              {location.pathname !== "/login" &&
                location.pathname !== "/register" && (
                  // Only show the "Logout" button if the current path isn't login or register
                  <button className="navButton" onClick={handleLogout}>
                    Logout
                  </button>
                )}
            </>
          ) : (
            <>
              <button className="navButton" onClick={handleRegisterClick}>
                Register
              </button>
              <button className="navButton" onClick={handleLoginClick}>
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
