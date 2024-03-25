import Card from "../Card/Card";
import { Container } from "../Container/Container";
import Grid from "../Grid/Grid";

import { formatNumber } from "../../utils/format_number";

function SearchResults({ results }) {
  return (
    <Container title="Search results">
      <Grid columns={4} rows="auto" gap="15px">
        {results.map((planet) => (
          <Card key={planet.name}>
            <h2>{planet.name}</h2>
            <div className="horizontal-group">
              <p>Rotation:{planet.rotation_period}</p>
              <p>Orbital:{planet.orbital_period}</p>
              <p>Diameter:{planet.diameter}</p>
            </div>
            <div className="featured-group">
              <div className="featured-item">
                Climate<p>{planet.climate}</p>
              </div>
              <div className="featured-item">
                Gravity <p>{planet.gravity}</p>
              </div>
              <div className="featured-item">
                Terrain <p>{planet.terrain}</p>
              </div>
              <div className="featured-item">
                Surface water <p>{planet.surface_water}</p>
              </div>
            </div>
            <p className="center">Population</p>
            <p className="center text-big margin-0">
              {parseInt(planet.population) > 0
                ? formatNumber(planet.population)
                : planet.population}
            </p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default SearchResults;
