import Car from "../models/Car.js";

// @desc    Get all cars
// @route   GET /api/cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single car
// @route   GET /api/cars/:id
const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a car
// @route   POST /api/cars
const createCar = async (req, res) => {
  try {
    console.log("Incoming car:", req.body);

    const car = await Car.create(req.body);

    res.status(201).json(car);

  } catch (error) {
    console.log("Create car error:", error.message);

    res.status(400).json({ 
      message: error.message 
    });
  }
};

// @desc    Update a car
// @route   PUT /api/cars/:id
const updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a car
// @route   DELETE /api/cars/:id
const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json({ message: "Car deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};