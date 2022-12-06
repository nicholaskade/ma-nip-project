import React from 'react';
import PlantCard from './PlantCard';

function PlantList({plants}){
    const housePlants = plants.map((housePlants) => {
        console.log(housePlants)
        return <PlantCard
            key={housePlants.id}
            name={housePlants['Common name']}
            latinName={housePlants['Latin name'].toUpperCase()}
            climate= {housePlants.climate}
            image={housePlants.img}
            watering={housePlants.Watering}
        />
})

return(
        <ul className="cards">{housePlants}</ul>
);

}

export default PlantList;