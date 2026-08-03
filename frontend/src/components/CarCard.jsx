import "../styles/CarCard.css";

function CarCard({ car }) {
  return (
    <div className="car-card">

      <img src={car.image} alt={car.name}/>

      <h3>{car.name}</h3>

      <p>Year: {car.year}</p>

      <p>
        Price: ${car.price}
      </p>

      <button>
        View Details
      </button>

    </div>
  );
}

export default CarCard;