import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, userId }){
    const housePlants = plants.map((housePlants) => {
        if (housePlants['Common name'] !== null) {
            return <PlantCard
                key={housePlants.id}
                name={housePlants['Common name'][0]}     
                latinName={housePlants['Latin name'].toUpperCase()}
                climate= {housePlants.climate}
                image={housePlants.img}
                watering={housePlants.Watering}
                userId={userId}
            />
        };
    });

    return(
        <div className="cards">{housePlants}</div>
    );

};

export default PlantList;