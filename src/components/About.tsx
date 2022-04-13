import { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "react-lottie";
import headshot from "../assets/images/headshot.jpg";
import "../styles/about.scss";
import animation from "../assets/images/cantilever.json";
import LoadingContext from "../context/LoadingContext";
import Background from "../parallax/Background";
import Parallax from "../parallax/Parallax";

import code from "../assets/images/code.jpg";
import internet from "../assets/images/apps.jpg";
import { Link } from "react-router-dom";

const parallaxStrength = 500;

const lottieOptions = {
  animationData: animation,
};

const About = () => {
  const { loading } = useContext(LoadingContext);

  if (loading) {
    return (
      <div className="vh-100 d-flex pt-4">
        <Lottie options={lottieOptions} height={400} width={400} />
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <div className="jumbotron jumbotron-fluid mb-0">
          <Container>
            <h3 className="pb-0 mb-2 text-center">About</h3>
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
          <img
            src={headshot}
            alt="Jamie"
            className="img-fluid rounded-circle"
          />
        </Col>

        <Col xs={12} sm={6} className="my-auto" id="about">
          <p>
            I'm Jamie and I live in North London. I started coding six years
            ago, have learnt numerous programming languages and frameworks, and
            increasingly specialized in my favourite,{" "}
            <a href="https://www.javascript.com/">Javascript</a>.
          </p>
          <Parallax strength={parallaxStrength} contentClassName="para-1">
            <Background className="custom-bg">
              <img src={code} alt="Code" />
            </Background>
          </Parallax>
          <p className="mt-2">
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
          <Parallax strength={parallaxStrength} contentClassName="para-1">
            <Background className="custom-bg">
              <img src={internet} alt="Internet" />
            </Background>
          </Parallax>
          <p className="mt-2">
            I know the whole process from start to finish, which lets me, for
            example, take a mobile app from an idea, through prototypes, past
            the app store review processes and onto peoples' mobile phones as a
            production ready application that users love.
          </p>
          <p>
            My preference is to use <a href="https://aws.amazon.com/">AWS</a>{" "}
            for hosting my apps as it minimizes cost and I have an extensive
            knowledge of it, however I also have experience with{" "}
            <a href="https://cloud.google.com/">Google Cloud</a> and{" "}
            <a href="https://azure.microsoft.com"> Azure</a>.
          </p>
          <p className="mb-4">
            You can check out my <Link to="skills">skills</Link> or my{" "}
            <Link to="portfolio">portfolio</Link> for more information, or{" "}
            <Link to="contact">get in touch</Link> if you would like a quote for
            me to work on your project.
          </p>
          <div className="m-0 p-md-4" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
