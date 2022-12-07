import React,{ useState } from 'react';

function PlantCard( { name, latinName, watering, image, userId, id, setLikedPlants, likedPlants } ) {
    
    const [liked, setLiked] = useState(false);

    let currentPlant = {
        id: id,
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
        if (liked === false) {
            let postRequest = {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    },
                    body: JSON.stringify(currentPlant)
                }
            fetch(`http://localhost:5555/${userId}`, postRequest)
            .then(res => res.json())
            .then(res => setLikedPlants([...likedPlants, res]))
            setLiked(!liked);
        } else {
            let deleteRequest = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };
            
            fetch(`http://localhost:5555/${userId}/${id}`, deleteRequest)
            .then(res => res.json())
            .then(res => {
                let newPlants = likedPlants.filter((plants) => plants.id !== id);
                setLikedPlants(newPlants);
            })
            setLiked(!liked);
        }
    };

    return (
        <div className="card">
            <img src={image} image alt ={"plant name"}/>
            <p style={titleStyle}>{name}</p>
            <p>{latinName}</p>
            <p>{watering}</p>
            <button id={id} onClick={(e) => handleLiked(e)}>{liked ? "♥" : "♡"}</button>
       </div>
    )
};

export default PlantCard;