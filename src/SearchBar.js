import React from "react";

function SearchBar( { plantQuery, setPlantQuery } ) {
    return (
        <div id="search-bar-container">
            <form>
                <input 
                    type="text" 
                    id="search-bar" 
                    value={plantQuery} 
                    onChange={(e) => setPlantQuery(e.target.value)}
                />
            </form>
        </div>
    )
};

export default SearchBar;