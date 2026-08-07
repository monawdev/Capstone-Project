import express from "express";

import {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} from "../controllers/carController.js";

import protect from "../middleware/authMiddleware.js";


const router = express.Router();


// Public routes
// Anyone can view cars
router.get("/", getCars);

router.get("/:id", getCarById);


// Protected routes
// User must be logged in

router.post(
  "/",
  protect,
  createCar
);


router.put(
  "/:id",
  protect,
  updateCar
);


router.delete(
  "/:id",
  protect,
  deleteCar
);


export default router;