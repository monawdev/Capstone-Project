import CarCard from "../components/CarCard";
import "../styles/Cars.css";

function Cars() {

  const cars = [
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
      name: "Ford Mustang",
      year: 2024,
      price: 42000,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 4,
      name: "Tesla Model 3",
      year: 2023,
      price: 39000,
      image: "https://via.placeholder.com/300"
    }
  ];


  return (
    <div className="cars-page">

      <h1>Available Cars</h1>

      <input
        type="text"
        placeholder="Search cars..."
        className="search-bar"
      />


      <div className="cars-container">

        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
          />
        ))}

      </div>

    </div>
  );
}

export default Cars;