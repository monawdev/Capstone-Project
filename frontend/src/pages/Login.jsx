import { useState } from "react";
import "../styles/Auth.css";


function Login() {

  const [formData, setFormData] = useState({
    email:"",
    password:""
  });


  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit=(e)=>{

    e.preventDefault();

    console.log(formData);

  };


  return (

    <div className="auth-container">

      <h1>Login</h1>


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

  );
}


export default Login;