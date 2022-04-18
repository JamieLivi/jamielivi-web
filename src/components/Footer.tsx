import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <Container className="footer text-center my-auto py-auto">
      <Row id="social-icons">
        <Col>
          <SocialIcon
            url="https://twitter.com/JamieLivi"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Col>
        <Col>
          <SocialIcon
            url="https://www.linkedin.com/in/jamielivingstone/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Col>
        <Col>
          <SocialIcon
            url="https://github.com/jamielivi"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
