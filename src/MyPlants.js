import React, { useState } from "react";
import PlantCard from "./PlantCard";

function MyPlants({ myPlants, userId }) {

  const renderMyPlants = myPlants.map((plant) => {
    console.log(plant);
    return (
      <PlantCard
        key={plant.id}
        id={plant.id}
        name={plant.name}
        latinName={plant.latinName}
        watering={plant.watering}
        climate={plant.climat}
        image={plant.image}
        userId={userId}
        categories={plant.Categories}
      />
    );
  });

  return <div className="cards">{renderMyPlants}</div>;
}

export default MyPlants;
