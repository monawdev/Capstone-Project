import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import api from "../services/api";
import "../styles/Home.css";


function Home() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  const [cars, setCars] = useState([]);



  useEffect(() => {

    const fetchCars = async () => {

      try {

        const response = await api.get(
          "/api/cars"
        );


        // Only show 3 featured cars
        setCars(
          response.data.slice(0, 3)
        );


      } catch (error) {

        console.error(
          "Error loading cars:",
          error
        );

      }

    };


    fetchCars();


  }, []);



  return (

    <div className="home-page">


      <section className="hero">

        <h1>
          Find Your Dream Car
        </h1>


        <p>
          Browse vehicles, find your next car,
          or list your own vehicle.
        </p>



        <div className="hero-buttons">

          <Link to="/cars">

            <button>
              Browse Cars
            </button>

          </Link>



          {user && (

            <Link to="/add-car">

              <button>
                Sell Your Car
              </button>

            </Link>

          )}

        </div>


      </section>




      <section className="featured-section">

        <h2>
          Featured Cars
        </h2>


        <div className="featured-cars">


          {cars.map((car) => (

            <CarCard
              key={car._id}
              car={car}
            />

          ))}


        </div>


      </section>





      <section className="features">


        <div className="feature-card">

          <h2>
            🚗 Browse Cars
          </h2>

          <p>
            Explore vehicles from different sellers.
          </p>

        </div>



        <div className="feature-card">

          <h2>
            🔐 Secure Accounts
          </h2>

          <p>
            Create an account and manage your listings.
          </p>

        </div>



        <div className="feature-card">

          <h2>
            👤 Manage Listings
          </h2>

          <p>
            Add, edit, and delete your own cars.
          </p>

        </div>


      </section>



    </div>

  );

}


export default Home;