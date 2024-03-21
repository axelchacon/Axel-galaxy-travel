import Card from "./components/Card/Card";
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
        <Grid columns={4} rows="auto" gap="15px">
          <Card>
            <h2>Mi titulo</h2>
            <div className="horizontal-group">
              <p>Rotation:12</p>
              <p>Rotation:23</p>
              <p>Rotation:223</p>
            </div>
            <div className="featured-group">
              <div className="featured-item">
                Rotation:12<p>Detail</p>
              </div>
              <div className="featured-item">
                Orbital:23 <p>Detail</p>
              </div>
              <div className="featured-item">
                Diameter:223 <p>Detail</p>
              </div>
            </div>
            <p className="center">Population</p>
            <p className="center text-big margin-0">200,000</p>
          </Card>
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Container>
      <Container title="Hosts" />
    </>
  );
}

export default App;
