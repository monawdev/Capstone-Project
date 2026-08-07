import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/Cars.css";


function Login() {

  const navigate = useNavigate();


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const response = await api.post(
        "/api/auth/login",
        {
          email,
          password
        }
      );


      localStorage.setItem(
        "token",
        response.data.token
      );


      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );


      alert("Login successful!");


      navigate("/profile");


    } catch (error) {

      console.error("Login error:", error);

      alert(
        "Invalid email or password"
      );

    }

  };



  return (

    <div className="cars-page">


      <h1>
        Login
      </h1>



      <form onSubmit={handleSubmit}>


        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />



        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />



        <button type="submit">
          Login
        </button>


      </form>


    </div>

  );

}


export default Login;