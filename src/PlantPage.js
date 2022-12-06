import React from 'react';
import PlantList from './PlantList'
import PlantCard from './PlantCard';
import {useEffect, useState} from 'react';

function PlantPage( { userId } ){
    const [plants, setPlants] = useState([])
    
    useEffect(() => {
        fetch("https://house-plants2.p.rapidapi.com/?rapidapi-key=99ea664de4mshd5cea2d2d44e287p1eb8b9jsn0cc5fb5c8bf5")
        .then(resp => resp.json())
        .then(plants => setPlants(plants.sort(sortPlantObjects)))
    },[]);

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
        <PlantList
        userId={userId}
        plants={plants}
        />
     </main>
    )
};

export default PlantPage;