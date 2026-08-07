import { Link } from "react-router-dom";
import "../styles/CarCard.css";

function CarCard({ car, onDelete }) {

  return (

    <div className="car-card">


      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
      />


      <div className="car-info">


        <h2>
          {car.brand} {car.model}
        </h2>


        <p>
          Year: {car.year}
        </p>


        <p>
          Mileage: {Number(car.mileage).toLocaleString()} miles
        </p>


        <p className="price">
          ${Number(car.price).toLocaleString()}
        </p>



        <div className="card-buttons">


          <Link to={`/cars/${car._id}`}>
            <button>
              View Details
            </button>
          </Link>



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


        </div>


      </div>


    </div>

  );

}


export default CarCard;