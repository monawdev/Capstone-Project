import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import api from "../services/api";
import "../styles/Cars.css";

function Cars() {
  const [cars, setCars] = useState([]);
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

  if (loading) {
    return <h2>Loading cars...</h2>;
  }

  return (
    <div className="cars-page">
      <h1>Available Cars</h1>

      <input
        type="text"
        placeholder="Search cars..."
        className="search-bar"
      />

      <div className="cars-container">
        {cars.length === 0 ? (
          <p>No cars available yet.</p>
        ) : (
          cars.map((car) => (
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