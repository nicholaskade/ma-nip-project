import React from 'react';
import PlantList from './PlantList'
import PlantCard from './PlantCard';
import {useEffect, useState} from 'react';
import SearchBar from './SearchBar';

function PlantPage( { userId, setLikedPlants, likedPlants } ){
    const [plants, setPlants] = useState([])
    const [plantQuery, setPlantQuery] = useState("");

    const filteredPlants = plants.filter(plant => {
        if (plants.length > 0 && plant["Common name"] !== null) {
            return plant.Categories.toLowerCase().includes(plantQuery.toLowerCase()) || plant["Common name"][0].toLowerCase().includes(plantQuery.toLowerCase())
        };
    });

    useEffect(() => {
        fetch("https://house-plants2.p.rapidapi.com/?rapidapi-key=99ea664de4mshd5cea2d2d44e287p1eb8b9jsn0cc5fb5c8bf5")
        .then(resp => resp.json())
        .then(plants => setPlants(plants.sort(sortPlantObjects)))
    }, []);

    function sortPlantObjects(a, b){
        if (a['Common name'] < b['Common name']) {
            return -1;
        }
        if (a['Common name'] > b['Common name']) {
            return 1;
        }
        if (a['Common name'] === b['Common name']) {
            return 0;
        }
    };

    return (
     <main>
        <SearchBar plantQuery={plantQuery} setPlantQuery={setPlantQuery}/>
        <PlantList userId={userId} plants={filteredPlants} setLikedPlants={setLikedPlants} likedPlants={likedPlants}/>
     </main>
    )
};

export default PlantPage;