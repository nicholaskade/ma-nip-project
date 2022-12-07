import React from 'react';
import PlantCard from './PlantCard';

function MyPlants({myPlants, userId}){

const renderMyPlants = myPlants.map((plant) => {
   return (
      <PlantCard 
      key={plant.id}
      id={plant.id}
      name={plant.name}
      latinName={plant.latinName}
      watering={plant.watering}
      image={plant.image}
      userId={userId}
      />
    )
  });


     return (
    <div>
      {renderMyPlants}
    </div>
    )
};

export default MyPlants;