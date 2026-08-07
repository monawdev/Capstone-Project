import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/Auth.css";


function Login() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
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

      const response = await api.post(
        "/api/auth/login",
        formData
      );


      localStorage.setItem(
        "token",
        response.data.token
      );


      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );


      navigate("/profile");


    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Invalid login"
      );

    }

  };



  return (

    <div className="auth-page">


      <div className="auth-card">


        <h1>
          Login
        </h1>


        <p>
          Welcome back to Car Marketplace
        </p>



        {error && (

          <p className="error-message">
            {error}
          </p>

        )}



        <form onSubmit={handleSubmit}>


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
            Login
          </button>


        </form>


      </div>


    </div>

  );

}


export default Login;