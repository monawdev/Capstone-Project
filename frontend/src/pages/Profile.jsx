import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import api from "../services/api";
import "../styles/Cars.css";


function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  const [cars, setCars] = useState([]);



  useEffect(() => {

    const fetchUserCars = async () => {

      try {

        const response = await api.get(
          "/api/cars"
        );


        const userCars = response.data.filter(
          (car) =>
            car.owner === user.id
        );


        setCars(userCars);


      } catch (error) {

        console.error(
          "Error fetching cars:",
          error
        );

      }

    };


    if (user) {
      fetchUserCars();
    }


  }, [user]);



  const handleDelete = async (id) => {

    try {

      await api.delete(
        `/api/cars/${id}`
      );


      setCars(
        cars.filter(
          (car) => car._id !== id
        )
      );


    } catch (error) {

      console.error(
        "Error deleting car:",
        error
      );

    }

  };



  if (!user) {

    return (

      <div className="cars-page">

        <h2>
          Please login first
        </h2>

      </div>

    );

  }



  return (

    <div className="cars-page">


      <h1>
        My Profile
      </h1>



      <div className="profile-card">


        <h2>
          {user.name}
        </h2>


        <p>
          Email: {user.email}
        </p>


        <p>
          Cars Listed: {cars.length}
        </p>


      </div>



      <h2>
        My Cars
      </h2>



      <div className="cars-container">


        {cars.length === 0 ? (

          <p>
            You have not listed any cars yet.
          </p>


        ) : (


          cars.map((car) => (

            <CarCard
              key={car._id}
              car={car}
              onDelete={handleDelete}
            />

          ))


        )}


      </div>


    </div>

  );

}


export default Profile;