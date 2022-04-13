import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import code from "../assets/images/code.jpg";
interface Props {}

const Skills = (props: Props) => {
  return (
    <Container>
      <Row>
        <div className="jumbotron jumbotron-fluid mb-0">
          <Container>
            <h2 className="pb-0 mb-2 text-center">Skills</h2>
          </Container>
        </div>
      </Row>
      <Row>
        <Col
          xs={8}
          sm={6}
          md={5}
          className="center mx-auto mb-lg-5 mb-m-4 mb-3"
        >
          <img src={code} alt="Code" className="img-fluid rounded" />
        </Col>

        <Col xs={12} sm={6} className="my-auto" id="about">
          <p>
            I'm Jamie and I live in North London. I started coding six years
            ago, have learnt numerous programming languages and frameworks, and
            increasingly specialized in my favourite,{" "}
            <a href="https://www.javascript.com/">Javascript</a>.
          </p>
          <p>
            I like to keep pace with all the latest technologies, which helps me
            speed up the development cycle and improve the quality of my
            websites and apps.
          </p>
          <p>
            I specialize in creating mobile apps (for iOS, Android and Web)
            using <a href="https://reactnative.dev/">React Native</a>, a
            Javascript Framework which I prefer to use with{" "}
            <a href="https://www.typescriptlang.org/">Typescript</a>, on the
            front end and GraphQL API's, NoSQL databases and Serverless
            technology on the backend. I adore{" "}
            <a href="https://aws.amazon.com/amplify/">AWS Amplify</a>.
          </p>
          <p>
            I know the whole process from start to finish, which lets me, for
            example, take a mobile app from an idea, through prototypes, past
            the app store review processes and onto peoples' mobile phones as a
            production ready application that users love.
          </p>
          <p className="mb-4">
            My preference is to use <a href="https://aws.amazon.com/">AWS</a>{" "}
            for hosting my apps as it minimizes cost and I have an extensive
            knowledge of it, however I also have experience with{" "}
            <a href="https://cloud.google.com/">Google Cloud</a> and{" "}
            <a href="https://azure.microsoft.com"> Azure</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
