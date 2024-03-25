import { useState } from "react";
import "./SearchForm.css";
function SearchForm({ ca, data }) {
  const [name, setName] = useState("");
  const [terrain, setTerrain] = useState("");
  const [climate, setClimate] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const hasName =
      name.length >= 1
        ? data.filter((planet) =>
            planet.name.toUpperCase().includes(name.toUpperCase())
          )
        : data;
    const hasTerrain =
      terrain.length >= 1
        ? hasName.filter((planet) => planet.terrain.includes(terrain))
        : hasName;
    const hasClimate =
      climate.length >= 1
        ? hasTerrain.filter((planet) => planet.climate.includes(climate))
        : hasTerrain;
    console.log(hasClimate);
    //onSearchPlanets(hasClimate);
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <p>{ca}</p>
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="terrain">Terrain</label>
        <input
          value={terrain}
          onChange={(e) => setTerrain(e.target.value)}
          type="text"
          id="terrain"
          name="terrain"
        />
      </div>
      <div>
        <label htmlFor="climate">Climate</label>
        <input
          value={climate}
          onChange={(e) => setClimate(e.target.value)}
          type="text"
          id="climate"
          name="climate"
        />
      </div>
      <button>Help me to search</button>
    </form>
  );
}

export default SearchForm;
