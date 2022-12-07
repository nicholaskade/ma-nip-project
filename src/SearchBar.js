import React from "react";

function SearchBar( { plantQuery, setPlantQuery } ) {
    return (
        <div id="search-bar">
            <form>
                <input type="text" type="text" value={plantQuery} onChange={(e) => setPlantQuery(e.target.value)}/>
            </form>
        </div>
    )
}

export default SearchBar;