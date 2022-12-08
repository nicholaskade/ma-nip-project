import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, userId, likedPlants, setLikedPlants, isLoading }) {
  const housePlants = plants.map((housePlants) => {
    if (housePlants["Common name"] !== null) {
      return (
        <PlantCard
          key={housePlants.id}
          name={housePlants["Common name"][0]}
          latinName={housePlants["Latin name"].toUpperCase()}
          climate={housePlants.climate}
          image={housePlants.img}
          watering={housePlants.Watering}
          id={housePlants.id}
          userId={userId}
          setLikedPlants={setLikedPlants}
          likedPlants={likedPlants}
        />
      );
    }
  });

  return (
    <div className="cards">
      {isLoading ?
      <img src={require('./Io7.gif')} className ="loading-gif" alt="my-gif" /> : null}
      {housePlants}
    </div>
  );
}

export default PlantList;
