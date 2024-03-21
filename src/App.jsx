import { Container } from "./components/Container/Container";
import Grid from "./components/Grid/Grid";
import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <>
      <Hero title="Galaxy Travel" alignTitle="right">
        {/* {Todo: ca no renderiza bien en el monitor} */}
        <SearchForm ca={"Look fir the best space travles in the universe"} />
      </Hero>
      <Container title="Planets">
        <Grid columns={4} rows="200px" gap="15px"></Grid>
      </Container>
      <Container title="Hosts" />
    </>
  );
}

export default App;
