import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import code from "../assets/images/randomcode.jpg";
interface Props {}

const Skills = (props: Props) => {
  return (
    <Container>
      <Row>
        <div className="jumbotron jumbotron-fluid mb-0">
          <Container>
            <h3 className="pb-1 mb-2 text-center">Skills</h3>
          </Container>
        </div>
      </Row>
      <Row>
        <Col xs={8} sm={6} md={3} className="mx-auto mb-lg-5 mb-m-4 mb-3">
          <img src={code} alt="Code" className="img-fluid rounded" />
        </Col>

        <Col xs={12} sm={6} className="m-auto">
          <ul>
            <li> HTML, CSS, JavaScript (Website development, front end) </li>
            <li> {`React Native (Mobile app development, iOS & Android)`} </li>
            <li> React (Web app development) </li>
            <li> NodeJS, GraphQL, REST (Backend web development) </li>
            <li>
              {" "}
              AWS (Extensive experience with Amplify, DynamoDB, Appsync etc.){" "}
            </li>
            <li> WordPress (CMS)</li>
            <li>
              {" "}
              Social provider integration (e.g. login with Facebook / Apple /
              Google){" "}
            </li>
            <li> Payment provider integration (e.g. Stripe / PayPal) </li>
            <li>XCode{` & `}Android Studio</li>
            <li>Firebase {` & `} analytics</li>
            <li>Git / GitHub</li>
            <li> Databases (mostly NoSQL) </li>
            <li> HTML Emailing </li>
            <li> Bootstrap </li>
          </ul>
          <p>
            And a bunch of other stuff, get in touch if you want to ask about my
            experience with anything specific.
          </p>
          <div className="m-0 p-md-4" />
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
