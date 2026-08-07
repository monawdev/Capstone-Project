import "../styles/Cars.css";

function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  if (!user) {

    return (
      <div className="cars-page">
        <h2>
          Please login first
        </h2>
      </div>
    );

  }



  return (

    <div className="cars-page">


      <h1>
        Profile
      </h1>



      <h2>
        Welcome, {user.name}
      </h2>



      <p>
        Email: {user.email}
      </p>



      <h3>
        Your Cars
      </h3>



      <p>
        You have not listed any cars yet.
      </p>


    </div>

  );

}


export default Profile;