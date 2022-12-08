import React, { useState, useEffect } from "react";
import MyPlants from "./MyPlants";

function MyPlantPage({ userId }) {
  const [myPlants, setMyPlants] = useState([]);
  console.log(myPlants);

  useEffect(() => {
    if (userId !== "default") {
      fetch(`http://localhost:3002/favorites`)
        .then((res) => res.json())
        .then((res) => setMyPlants(res));
    }
  }, []);

  return (
    <div>
      <MyPlants myPlants={myPlants} userId={userId} />
      <h1>My Plant Babiesss!</h1>
    </div>
  );
}

export default MyPlantPage;
