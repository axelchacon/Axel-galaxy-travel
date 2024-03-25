//import { Container } from "./components/Container/Container";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Hosts from "./components/Hosts/Hosts";
import Planets from "./components/Planets/Planets";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  const [searchPlanets, setSearchPlanets] = useState([]); // Parte 4.1: añadiendo el useState el cual va a filtrar
  const [searchResults, setSearchResults] = useState([]);
  //console.log(searchPlanets); // // Parte 4.1: añadiendo el console.log

  return (
    <>
      <Hero title="Galaxy Travel" alignTitle="right">
        <SearchForm
          ca={"Look fir the best space travles in the universe"}
          data={searchPlanets}
          onSearchPlanets={setSearchResults}
        />
      </Hero>
      {searchResults.length > 0 ? (
        <SearchResults results={searchResults} />
      ) : (
        <>
          <Planets onUpdatePlanets={setSearchPlanets} />
          <Hosts />
        </>
      )}
    </>
  );
}

export default App;
