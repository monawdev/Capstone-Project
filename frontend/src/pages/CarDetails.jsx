import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "../styles/Cars.css";

function CarDetails() {
  const { id } = useParams();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await api.get(`/api/cars/${id}`);
        setCar(response.data);
      } catch (error) {
        console.error("Error fetching car:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);


  if (loading) {
    return <h2>Loading car...</h2>;
  }


  if (!car) {
    return <h2>Car not found</h2>;
  }


  return (
    <div className="cars-page">

      <h1>
        {car.brand} {car.model}
      </h1>

      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        width="400"
      />

      <p>Year: {car.year}</p>

      <p>
        Price: ${Number(car.price).toLocaleString()}
      </p>

      <p>
        Mileage: {Number(car.mileage).toLocaleString()} miles
      </p>

      <p>Color: {car.color}</p>

      <p>
        {car.description}
      </p>

    </div>
  );
}

export default CarDetails;