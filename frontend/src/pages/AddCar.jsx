import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/Cars.css";


function AddCar() {

  const navigate = useNavigate();


  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    color: "",
    description: "",
    image: "",
  });


  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);



  const handleChange = (e) => {

    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    setMessage("");

    setError("");

    setLoading(true);



    try {


      const formattedCar = {

        ...car,

        year: Number(car.year),

        price: Number(
          car.price.replace(/,/g, "")
        ),

        mileage: Number(
          car.mileage.replace(/,/g, "")
        ),

      };



      await api.post(
        "/api/cars",
        formattedCar
      );



      setMessage(
        "Car added successfully!"
      );



      setTimeout(() => {

        navigate("/profile");

      }, 1000);



    } catch (error) {


      setError(
        error.response?.data?.message ||
        "Could not add car"
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="cars-page">


      <h1>
        Add Car
      </h1>



      {message && (

        <p>
          {message}
        </p>

      )}



      {error && (

        <p className="error-message">
          {error}
        </p>

      )}



      <form onSubmit={handleSubmit}>


        <input
          name="brand"
          value={car.brand}
          onChange={handleChange}
          placeholder="Brand"
          required
        />



        <input
          name="model"
          value={car.model}
          onChange={handleChange}
          placeholder="Model"
          required
        />



        <input
          name="year"
          value={car.year}
          onChange={handleChange}
          placeholder="Year"
          required
        />



        <input
          name="price"
          value={car.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />



        <input
          name="mileage"
          value={car.mileage}
          onChange={handleChange}
          placeholder="Mileage"
          required
        />



        <input
          name="color"
          value={car.color}
          onChange={handleChange}
          placeholder="Color"
          required
        />



        <input
          name="image"
          value={car.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />



        <textarea
          name="description"
          value={car.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />



        <button type="submit">

          {loading
            ? "Adding..."
            : "Add Car"}

        </button>


      </form>


    </div>

  );

}


export default AddCar;