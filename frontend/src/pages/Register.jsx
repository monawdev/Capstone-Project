import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/Auth.css";


function Register() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const [error, setError] = useState("");



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");


    try {

      await api.post(
        "/api/auth/register",
        formData
      );


      navigate("/login");


    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Registration failed"
      );

    }

  };



  return (

    <div className="auth-page">


      <div className="auth-card">


        <h1>
          Create Account
        </h1>


        <p>
          Join Car Marketplace
        </p>



        {error && (

          <p className="error-message">
            {error}
          </p>

        )}



        <form onSubmit={handleSubmit}>


          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />



          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />



          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />



          <button type="submit">
            Register
          </button>


        </form>


      </div>


    </div>

  );

}


export default Register;