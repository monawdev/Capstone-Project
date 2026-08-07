import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";
import CarDetails from "./pages/CarDetails";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";


function App() {

  return (

    <>
      <Navbar />


      <Routes>


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/cars"
          element={<Cars />}
        />


        <Route
          path="/add-car"
          element={<AddCar />}
        />


        <Route
          path="/cars/:id"
          element={<CarDetails />}
        />


        <Route
          path="/cars/edit/:id"
          element={<EditCar />}
        />


        <Route
          path="/login"
          element={<Login />}
        />


        <Route
          path="/register"
          element={<Register />}
        />


        <Route
          path="/profile"
          element={<Profile />}
        />


        <Route
          path="*"
          element={<NotFound />}
        />


      </Routes>

    </>

  );

}


export default App;