import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Container } from "../Container/Container";
import Grid from "../Grid/Grid";

//import { formatNumber } from "../../utils/format_number";
import { getAllHosts } from "../../services/hots_service";

function Hosts() {
  const [hosts, setHosts] = useState([]);

  useEffect(() => {
    async function fetchHosts() {
      const data = await getAllHosts();
      // console.log(data.results);
      setHosts(data.results);
    }
    fetchHosts();
  }, []);

  return (
    <Container title="Hosts">
      <Grid columns={4} rows="auto" gap="15px">
        {hosts.map((host) => (
          <Card key={host.name}>
            <h2>{host.name}</h2>
            <div className="featured-group">
              <div className="featured-item">
                Birth year<p>{host.birth_year}</p>
              </div>
              <div className="featured-item">
                Gender <p>{host.gender}</p>
              </div>
              <div className="featured-item">
                Heigth <p>{host.height}</p>
              </div>
            </div>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default Hosts;
