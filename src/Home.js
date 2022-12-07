import React from "react";
import LoginForm from "./LoginForm";
import {useState, useEffect} from "react";
import MyPlants from "./MyPlants";

function Home( { firebaseConfig, setUserId, userId } ) {
  
  const [myPlants, setMyPlants] = useState([]);

  // useEffect(() => {
  //   if (userId !== "default") {
  //     fetch(`http://localhost:3002/users`)
  //     .then(res => res.json())
  //     .then(res => setMyPlants(res))
  //   }
  // }, []);

  return (
    <div>
       <LoginForm firebaseConfig={firebaseConfig} setUserId={setUserId}/>
       <MyPlants myPlants={myPlants} userId={userId}/>
      <h1>Home!</h1>
    </div>
  )
}

export default Home;