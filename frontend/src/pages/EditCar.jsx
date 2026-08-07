import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import "../styles/Cars.css";

function EditCar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    color: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await api.get(`/api/cars/${id}`);
        setCar(response.data);
      } catch (error) {
        console.error("Error loading car:", error);
      }
    };

    fetchCar();
  }, [id]);


  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/api/cars/${id}`, car);

      alert("Car updated successfully!");

      navigate(`/cars/${id}`);

    } catch (error) {
      console.error("Error updating car:", error);
    }
  };


  return (
    <div className="cars-page">

      <h1>Edit Car</h1>

      <form onSubmit={handleSubmit}>

        {Object.keys(car).map((field) => (
          <input
            key={field}
            name={field}
            value={car[field]}
            onChange={handleChange}
            placeholder={field}
          />
        ))}

        <button type="submit">
          Save Changes
        </button>

      </form>

    </div>
  );
}

export default EditCar;