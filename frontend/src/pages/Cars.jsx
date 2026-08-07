import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import api from "../services/api";
import "../styles/Cars.css";

function Cars() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get("/api/cars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) => {
    const searchTerm = search.toLowerCase();

    return (
      car.brand.toLowerCase().includes(searchTerm) ||
      car.model.toLowerCase().includes(searchTerm)
    );
  });

  if (loading) {
    return <h2>Loading cars...</h2>;
  }

  return (
    <div className="cars-page">
      <h1>Available Cars</h1>

      <input
        type="text"
        placeholder="Search by brand or model..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cars-container">
        {filteredCars.length === 0 ? (
          <p>No cars found.</p>
        ) : (
          filteredCars.map((car) => (
            <CarCard
              key={car._id}
              car={car}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Cars;