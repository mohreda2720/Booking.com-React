import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/loginRegister";
import { useTranslation } from "react-i18next";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { BsGlobe } from "react-icons/bs";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  if (i18n.dir(i18n.language) === "rtl") {
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
  } else {
    document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
  }
  const navigate = useNavigate();
  const location = useLocation(); // get current location using useLocation()
  // const currentUser = useSelector((state) => state.users.currentUser);
  const currentUser = JSON.parse(localStorage.getItem("loggedUser"));

  const isLoggedIn = currentUser !== null;
  const dispatch = useDispatch();

  const handleRegisterClick = () => navigate("/register");
  const handleLoginClick = () => navigate("/login");
  const handleLogout = () => {
    dispatch(logoutUser())
      localStorage.removeItem('loggedUser');
      localStorage.removeItem('token')
      // Redirect to the login page
      navigate('/');
    }
  
  const home = () => {
    navigate("/");
  };
  const changeLanguage = (language) => i18n.changeLanguage(language);

  return (
    <div className="navbarClass">
      <div className="navContainer">
        <span className="logo" style={{ cursor: "pointer" }} onClick={home}>
          BOOKING
        </span>
        <div className="navItems d-flex align-items-center">
          {isLoggedIn ? (
            <>
              <span className="welcomeMessage me-2">
                Welcome, {currentUser.userName}!
              </span>
              {location.pathname !== "/login" &&
                location.pathname !== "/register" && (
                  <button className="navButton" onClick={handleLogout}>
                    Logout
                  </button>
                )}
            </>
          ) : (
            <>
              <button className="navButton me-2" onClick={handleRegisterClick}>
                Register
              </button>
              <button className="navButton me-2" onClick={handleLoginClick}>
                Login
              </button>
              <div>
                <DropdownButton id="language-selector" title={<BsGlobe />}>
                  <Dropdown.Item onClick={() => changeLanguage("ar")}>
                    AR
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage("en")}>
                    EN
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
