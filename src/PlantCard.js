import React from 'react';

function PlantCard({name, latinName, watering, image}) {
    const titleStyle = {
        fontSize: "x-large"
    };

    return (
       <li className="card">
        <img src={image} image alt ={"plant name"}/>
        <p style={titleStyle}>{name}</p>
        <p>{latinName}</p>
        <div>
            <p>{watering}</p>
                <h2>💚</h2>
        </div>
       </li>
    )
};

export default PlantCard;