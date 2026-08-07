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

        console.error("Error fetching car:", error);

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


      navigate("/cars");


    } catch (error) {

      console.error("Error updating car:", error);

    }

  };



  return (

    <div className="cars-page">

      <h1>Edit Car</h1>


      <form onSubmit={handleSubmit}>


        <input
          name="brand"
          value={car.brand}
          onChange={handleChange}
          placeholder="Brand"
        />


        <input
          name="model"
          value={car.model}
          onChange={handleChange}
          placeholder="Model"
        />


        <input
          name="year"
          value={car.year}
          onChange={handleChange}
          placeholder="Year"
        />


        <input
          name="price"
          value={car.price}
          onChange={handleChange}
          placeholder="Price"
        />


        <input
          name="mileage"
          value={car.mileage}
          onChange={handleChange}
          placeholder="Mileage"
        />


        <input
          name="color"
          value={car.color}
          onChange={handleChange}
          placeholder="Color"
        />


        <input
          name="description"
          value={car.description}
          onChange={handleChange}
          placeholder="Description"
        />


        <input
          name="image"
          value={car.image}
          onChange={handleChange}
          placeholder="Image URL"
        />



        <button type="submit">
          Save Changes
        </button>


      </form>


    </div>

  );

}


export default EditCar;