import { Container } from "./components/Container/Container";
import Hero from "./components/Hero/Hero";
import Planets from "./components/Planets/Planets";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <>
      <Hero title="Galaxy Travel" alignTitle="right">
        {/* {Todo: ca no renderiza bien en el monitor} */}
        <SearchForm ca={"Look fir the best space travles in the universe"} />
      </Hero>
      <Planets />
      <Container title="Hosts" />
    </>
  );
}

export default App;
