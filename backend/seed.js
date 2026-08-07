import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Car from "./models/Car.js";

dotenv.config();


const cars = [
  {
    brand: "BMW",
    model: "M4 Competition",
    year: 2023,
    price: 86600,
    mileage: 8500,
    color: "Black",
    description: "High performance luxury sports coupe with premium features.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e"
  },

  {
    brand: "Toyota",
    model: "Camry XSE",
    year: 2022,
    price: 27500,
    mileage: 22000,
    color: "White",
    description: "Reliable midsize sedan with excellent fuel economy.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2"
  },

  {
    brand: "Honda",
    model: "Civic Touring",
    year: 2021,
    price: 24000,
    mileage: 31000,
    color: "Blue",
    description: "Comfortable and efficient daily driver.",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6"
  },

  {
    brand: "Tesla",
    model: "Model 3 Long Range",
    year: 2023,
    price: 34900,
    mileage: 15000,
    color: "Red",
    description: "Electric sedan with long range battery and modern technology.",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89"
  },

  {
    brand: "Ford",
    model: "Mustang GT",
    year: 2022,
    price: 39500,
    mileage: 12500,
    color: "Yellow",
    description: "Powerful American muscle car with a V8 engine.",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5f82d5d2c"
  }
];


const seedCars = async () => {

  try {

    await connectDB();

    await Car.deleteMany();

    await Car.insertMany(cars);

    console.log("Cars seeded successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};


seedCars();