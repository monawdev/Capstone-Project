import { useState } from "react";
import api from "../services/api";
import "../styles/Cars.css";

function AddCar() {

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



  const handleChange = (e) => {

    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );


      if (!user) {

        alert("Please login before adding a car");

        return;

      }



      const formattedCar = {

        ...car,


        price: Number(
          car.price.replace(/,/g, "")
        ),


        mileage: Number(
          car.mileage.replace(/,/g, "")
        ),


        owner: user.id

      };



      await api.post(
        "/api/cars",
        formattedCar
      );



      alert("Car added successfully!");



      setCar({

        brand: "",
        model: "",
        year: "",
        price: "",
        mileage: "",
        color: "",
        description: "",
        image: ""

      });



    } catch (error) {


      console.error(
        "Error adding car:",
        error
      );


    }

  };



  return (

    <div className="cars-page">


      <h1>
        Add Car
      </h1>



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
          placeholder="Price (example: 86,600)"
        />



        <input
          name="mileage"
          value={car.mileage}
          onChange={handleChange}
          placeholder="Mileage (example: 12,500)"
        />



        <input
          name="color"
          value={car.color}
          onChange={handleChange}
          placeholder="Color"
        />



        <input
          name="image"
          value={car.image}
          onChange={handleChange}
          placeholder="Image URL"
        />



        <textarea
          name="description"
          value={car.description}
          onChange={handleChange}
          placeholder="Description"
        />



        <button type="submit">
          Add Car
        </button>


      </form>


    </div>

  );

}


export default AddCar;