import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import "../styles/Home.css";

function Home() {

  const featuredCars = [
    {
      id: 1,
      name: "Toyota Camry",
      year: 2023,
      price: 28000,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      name: "Honda Civic",
      year: 2022,
      price: 24000,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      name: "BMW 3 Series",
      year: 2024,
      price: 45000,
      image: "https://via.placeholder.com/300"
    }
  ];


  return (
    <div className="home">

      <section className="hero">
        <h1>Find Your Dream Car</h1>

        <p>
          Buy and sell vehicles easily with Car Marketplace.
        </p>

        <Link to="/cars">
          <button>
            Browse Cars
          </button>
        </Link>
      </section>


      <section>
        <h2>Featured Cars</h2>

        <div className="car-container">

          {featuredCars.map((car) => (
            <CarCard 
              key={car.id}
              car={car}
            />
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;