import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {

  return (

    <div className="home-page">


      <div className="hero">


        <h1>
          Find Your Dream Car
        </h1>


        <p>
          Browse quality used cars from trusted sellers.
        </p>


        <Link to="/cars">
          <button>
            Browse Cars
          </button>
        </Link>


      </div>



      <div className="features">


        <div className="feature-card">

          <h2>
            Wide Selection
          </h2>

          <p>
            Explore different brands, models, and prices.
          </p>

        </div>



        <div className="feature-card">

          <h2>
            Easy Selling
          </h2>

          <p>
            Add your vehicle and reach buyers quickly.
          </p>

        </div>



        <div className="feature-card">

          <h2>
            Trusted Marketplace
          </h2>

          <p>
            Find detailed listings with important vehicle information.
          </p>

        </div>


      </div>


    </div>

  );

}


export default Home;