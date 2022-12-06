import React from 'react';

function PlantCard({name, latinName, watering, image}) {
    return (
       <li className="card">
        <img src={image} image alt ={"plant name"}/>
        <h1>{name}</h1>
        <h4>{latinName}</h4>
        <div>
        <h4>{watering}</h4>
            <h2>💚</h2>
        </div>
       </li>
    )
};

export default PlantCard;