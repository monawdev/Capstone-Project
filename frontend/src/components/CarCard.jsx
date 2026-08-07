import { Link } from "react-router-dom";
import "../styles/CarCard.css";


function CarCard({ car, onDelete }) {


  const user = JSON.parse(
    localStorage.getItem("user")
  );


  const isOwner =
    user &&
    car.owner === user.id;



  return (

    <div className="car-card">


      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
      />


      <h2>
        {car.brand} {car.model}
      </h2>


      <p>
        Year: {car.year}
      </p>


      <p className="price">
        Price: ${Number(car.price).toLocaleString()}
      </p>


      <p>
        Mileage: {Number(car.mileage).toLocaleString()} miles
      </p>


      <p>
        Color: {car.color}
      </p>



      <Link to={`/cars/${car._id}`}>
        <button>
          View Details
        </button>
      </Link>



      {isOwner && (

        <>


          <Link to={`/cars/edit/${car._id}`}>

            <button>
              Edit
            </button>

          </Link>



          <button
            onClick={() => onDelete(car._id)}
          >
            Delete
          </button>


        </>

      )}


    </div>

  );

}


export default CarCard;