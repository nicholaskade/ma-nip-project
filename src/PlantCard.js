import React,{ useState } from 'react';

function PlantCard( { name, latinName, watering, image, userId} ) {
    
    const [likedPlants, setLikedPlants] = useState([])

    let currentPlant = {
        name: name,
        latinName: latinName,
        watering: watering,
        image: image,
    };

    const titleStyle = {
        fontSize: "x-large"
    };
 
    function handleLiked(e){
        e.preventDefault();
    
        let postRequest = {
            method:'Post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                },
                body: JSON.stringify(currentPlant)
            }
        fetch(`http://localhost:5555/${userId}`, postRequest)
        .then(res => res.json())
        .then(plantData => console.log(plantData))
    };

    return (
        <div className="card">
            <img src={image} image alt ={"plant name"}/>
            <p style={titleStyle}>{name}</p>
            <p>{latinName}</p>
            <div>
                <p>{watering}</p>
                <button onClick={(e) => handleLiked(e)}>💚</button>
            </div>
       </div>
    )
};

export default PlantCard;