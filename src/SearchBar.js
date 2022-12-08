import React from "react";

function SearchBar({ plantQuery, setPlantQuery }) {
  return (
    <div id="search-bar-container">
      <form>
        <input
          type="text"
          id="search-bar"
          placeholder="🔍       Search Plants"
          value={plantQuery}
          onChange={(e) => setPlantQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
