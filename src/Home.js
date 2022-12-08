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
  

  // useEffect(() => {
  //   if (userId !== "default") {
  //     fetch(`http://localhost:3002/users`)
  //     .then(res => res.json())
  //     .then(res => setMyPlants(res))
  //   }
  // }, []);

  return (
    <div class="homepage">
      <h2 class="h2">Wishing You<br></br> a Fern-TASTIC <br></br> Holiday Season </h2>
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
       provider={provider}/>
       <img src={require('./christmas-cactus-snoopy.gif')} class ="home-gif" alt="my-gif" />
    </div>
  )
}

export default Home;