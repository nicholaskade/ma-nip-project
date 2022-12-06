import React from 'react';
import PlantList from './PlantList'
import {useEffect, useState} from 'react';


function PlantPage(){
    const [plants, setPlants] = useState([])

    useEffect(() => {
        fetch("https://house-plants2.p.rapidapi.com/?rapidapi-key=99ea664de4mshd5cea2d2d44e287p1eb8b9jsn0cc5fb5c8bf5")
        .then(resp => resp.json())
        .then(plants => setPlants(plants))
    },[]);

    








    return (
     <main>
        <PlantList
        plants={plants}
        
        
        
        />
     </main>
    )
}
export default PlantPage;