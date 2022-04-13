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
            <h3 className="pb-0 mb-2 text-center">Skills</h3>
          </Container>
        </div>
      </Row>
      <Row>
        <Col
          xs={8}
          sm={6}
          md={3}
          className="center mx-auto mb-lg-5 mb-m-4 mb-3"
        >
          <img src={code} alt="Code" className="img-fluid rounded" />
        </Col>

        <Col xs={12} sm={6} className="my-auto" id="about">
          <ul>
            <li> HTML, CSS, JavaScript (Website development, front end) </li>
            <li> React Native (Mobile app development, iOS & Android) </li>
            <li> React (Web app development) </li>
            <li> NodeJS, GraphQL, REST (Backend web development) </li>
            <li>
              {" "}
              AWS (Extensive experience with Amplify, DynamoDB, Appsync etc.){" "}
            </li>
            <li> WordPress </li>
            <li>
              {" "}
              Social provider integration (e.g. login with Facebook / Apple /
              Google){" "}
            </li>
            <li> Payment provider integration (e.g. Stripe / PayPal) </li>
            <li> Databases (mostly NoSQL) </li>
            <li> HTML Emailing </li>
            <li> Bootstrap </li>
          </ul>
          <p>
            And a bunch of other stuff, get in touch if you want to ask about my
            experience with anything specific.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
