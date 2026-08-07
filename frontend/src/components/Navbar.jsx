import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  };


  return (

    <nav className="navbar">


      <Link to="/" className="logo">
        Car Marketplace
      </Link>



      <div className="nav-links">


        <Link to="/">
          Home
        </Link>


        <Link to="/cars">
          Cars
        </Link>



        {user ? (

          <>

            <Link to="/profile">
              Profile
            </Link>


            <Link to="/add-car">
              Add Car
            </Link>


            <button onClick={logout}>
              Logout
            </button>

          </>

        ) : (

          <>

            <Link to="/login">
              Login
            </Link>


            <Link to="/register">
              Register
            </Link>

          </>

        )}


      </div>


    </nav>

  );

}


export default Navbar;