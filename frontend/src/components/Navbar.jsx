import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <h2>Car Marketplace</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/add-car">Add Car</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;