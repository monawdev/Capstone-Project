import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Car Marketplace</h2>

      <Link to="/">Home</Link>
      <Link to="/cars">Cars</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;