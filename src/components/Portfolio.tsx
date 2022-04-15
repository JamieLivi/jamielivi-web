import { Container, Row, CardGroup } from "react-bootstrap";
import Project from "./Project";
import ProjectLink from "./ProjectLink";

const aboutNeighbourly = `Local social network and services marketplace, created with React Native, GraphQL and AWS Appsync. 
75K+ iOS downloads and 18K+ Android downloads worldwide.`;
const aboutNeighbourlyWebsite = `Informational site containing links to apps, privacy policy, T's & C's etc.
Built with React and AWS, it also features Facebook integration and a few other cool features.`;
const aboutJokesApp = `Comedy news and joke database, built with React Native. 4.2 star rating from 128 reviews on Android, 4.2 star rating from 64 reviews on iPhone.`;
const aboutThis = `This website is built with React on the frontend and AWS Amplify at the back, including a REST API to handle the contact form.
I have made the code fior the front end public and viewable below.`;

const Portfolio = () => {
  return (
    <Container>
      <Row>
        <div className="jumbotron jumbotron-fluid">
          <h3>Mobile apps</h3>
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
            <Project name="JokesApp" about={aboutJokesApp} image="jokes">
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
          <h3>Websites - more coming soon</h3>
        </div>
      </Row>
      <Container fluid="md">
        <CardGroup>
          <Row className="mb-md-5">
            <Project
              name="Info Site"
              about={aboutNeighbourlyWebsite}
              image="nblyweb"
            >
              <ProjectLink
                text="View"
                link="https://www.theneighbourlyapp.com/"
              />
            </Project>
            <Project name="This website" about={aboutThis} image="jamielivi">
              <ProjectLink
                text="View Code"
                link="https://github.com/JamieLivi/jamielivi-web"
              />
            </Project>
          </Row>
        </CardGroup>
      </Container>
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
