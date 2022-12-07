import React from "react";
import LoginForm from "./LoginForm";
import {useState, useEffect} from "react";
import MyPlants from "./MyPlants";

function Home( { firebaseConfig, setUserId, userId} ) {
  const [myPlants, setMyPlants] = useState([])

    useEffect(() => {
    fetch(`http://localhost:5555/${userId}`)
    .then(resp => resp.json())
    .then(myPlants => setMyPlants(myPlants))
    }, []);

  // function checkDatabaseForUser(){
  //   fetch(`http://localhost:5555/`)
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // }

  // checkDatabaseForUser();

  return (
    <div>
       <LoginForm firebaseConfig={firebaseConfig} setUserId={setUserId}/>
       <MyPlants myPlants={myPlants} userId={userId}/>
      <h1>Home!</h1>
    </div>
  )
}

export default Home;