import React from "react";
import LoginForm from "./LoginForm";
import {useState} from "react";
import PlantCard from "./PlantCard";

function Home( { firebaseConfig, setUserId, userId, likedPlants, setLikedPlants } ) {
  console.log(likedPlants);
  // const likedPlantCards = likedPlants.map((plant) => {
  //   return (
  //     <PlantCard 
  //     key={plant.id}
  //     id={plant.id}
  //     name={plant.name}
  //     latinName={plant.latinName}
  //     watering={plant.watering}
  //     image={plant.image}
  //     userId={userId}
  //     setLikedPlants={setLikedPlants}
  //     />
  //   )
  // });

  return (
    <div>
       <LoginForm firebaseConfig={firebaseConfig} setUserId={setUserId}/>
       {/* {likedPlantCards} */}
      <h1>Home!</h1>
    </div>
  )
}

export default Home;