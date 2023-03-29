import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbarClass">
            <div className="navContainer">
                <span className="logo">BOOKING</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;