import React from "react";
import LoginForm from "./LoginForm";
import {useState, useEffect} from "react";


function Home( { 
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
} ) {
  

  return (
    <div className="homepage">
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
      <h2 className="h2">wishing you and yours<br></br> A FERN-TASTIC <br></br> holiday season <br></br>🍃</h2>
      <img 
        src={require('./christmas-cactus-snoopy.gif')} 
        className="home-gif" 
        alt="An animated GIF depicting Snoopy, the Peanuts character, decorating a cactus in blinking Christmas lights." 
      />
    </div>
  )
}

export default Home;