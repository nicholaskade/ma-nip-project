import { render } from "@testing-library/react";
import React, { useState } from "react";

function PlantCard({
  name,
  latinName,
  climate,
  image,
  userId,
  id,
  watering,
  categories,
  setLikedPlants,
  likedPlants
}) {

  console.log(categories)
    
const [liked, setLiked] = useState(false);

  let currentPlant = {
    id: id,
    name: name,
    latinName: latinName,
    climate: climate,
    image: image,
    watering: watering,
  };

  const titleStyle = {
    fontSize: "x-large",
  };

  function renderWatering(categories){
    if(categories === "Cactus & Succulent"){
    return "12-15 Days"
  } if (categories === "Palm") {
    return "8-10 Days"
  } else {
    return "5-7 Days"
  }
}

  function handleLiked(e) {
    e.preventDefault();
    if (liked === false) {
      let postRequest = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          id: userId + id,
          plant: currentPlant,
        }),
      };
      fetch(`http://localhost:3002/favorites`, postRequest)
        .then((res) => res.json())
        .then((res) => console.log(res));
      setLiked(!liked);
    } else {
      let deleteRequest = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      fetch(`http://localhost:3002/favorites/${userId + id}`, deleteRequest)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
      setLiked(!liked);
    }
  }
 

  return (
    <div className="card">
      <img src={image} alt={name} />
      <p style={titleStyle}>{name}</p>
      <p>{latinName}</p>
      <p>{climate}</p>
      <h3>💧{renderWatering(categories)}</h3>
      <button id={id} onClick={(e) => handleLiked(e)}>
        {liked ? "✅" : "💚"}
      </button>
    </div>
  );
}

export default PlantCard;
