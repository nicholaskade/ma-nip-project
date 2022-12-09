import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Header({
  firebaseConfig, 
  setUserId, 
  userId, 
  setLikedPlants, 
  likedPlants, 
  onAuthStateChanged, 
  user, 
  setUser, 
  auth, 
  signInWithPopup, 
  signOut,
  provider 
}) {
  function myPlantsRoute() { 
    if (userId !== "") {
      return (
        <Link className="nav-link" to="/MyPlantPage">
          My Plants
        </Link>
      );
    };
  };

  return (
    <div id="header-container">
      <header className="header">
        <img id="logo" src={require("./fern-logo.png")} alt="logo" />
          <nav className="nav-bar">
          <div id="link-container">
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/PlantPage">
              Plants
            </Link>

            {myPlantsRoute()}

            <Link className="nav-link" to="/About">
              About
            </Link>

            <LoginForm 
              firebaseConfig={firebaseConfig} 
              setUserId={setUserId}
              setLikedPlants={setLikedPlants} 
              likedPlants={likedPlants}
              onAuthStateChanged={onAuthStateChanged}
              user={user}
              setUser={setUser}
              auth={auth}
              signInWithPopup={signInWithPopup}
              signOut={signOut}
              provider={provider}
            />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
