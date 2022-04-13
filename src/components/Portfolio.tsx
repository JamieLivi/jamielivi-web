import { Container, Row, CardGroup } from "react-bootstrap";
import Project from "./Project";
import ProjectLink from "./ProjectLink";

const aboutNeighbourly = `Local social network and services marketplace, created with React Native, GraphQL and AWS Appsync.`;

const Portfolio = () => {
  return (
    <Container>
      <Row>
        <div className="jumbotron jumbotron-fluid">
          <h2>Mobile apps</h2>
        </div>
      </Row>
      <Container fluid="md">
        <CardGroup>
          <Row className="mb-md-5">
            <Project name="Neighbourly" about={aboutNeighbourly} image="nbly">
              <ProjectLink
                text="iOS"
                link="https://apps.apple.com/app/neighborly/id1506443521"
              />
              <ProjectLink
                text="Android"
                link="https://play.google.com/store/apps/details?id=com.share.community"
              />
            </Project>
            <Project
              name="JokesApp"
              about={"Comedy news and joke database, built with React Native."}
              image="jokes"
            >
              <ProjectLink
                text="iOS"
                link="https://apps.apple.com/app/jokesapp-jokes-comedy/id1461744227"
              />
              <ProjectLink
                text="Android"
                link="https://play.google.com/store/apps/details?id=com.dailyjokeapp.dailyjoke"
              />
            </Project>
            <Project
              name="PSO"
              about={"Political discussion platform - more info coming soon."}
              image="pso"
            ></Project>
          </Row>
        </CardGroup>
      </Container>
      <Row>
        <div className="jumbotron jumbotron-fluid">
          <h2>Websites - coming soon</h2>
        </div>
      </Row>
      <Row>
        <div className="jumbotron jumbotron-fluid">
          <h2>Other</h2>
        </div>
      </Row>
      <Container fluid="md">
        <CardGroup>
          <Row className="mb-md-5">
            <p>Art voting tool - more info coming soon</p>
          </Row>
        </CardGroup>
      </Container>
    </Container>
  );
};

export default Portfolio;
