import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import "../styles/footer.scss";

function Footer() {
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
        {/* <Col>
          <SocialIcon
            url="https://stackoverflow.com/users/16159639/luke-poirrier"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Col> */}
      </Row>
      <Row className="mb-3">
        <a href="mailto:jamie.livingstone1@outlook.com">
          jamie.livingstone1@outlook.com
        </a>
      </Row>
    </Container>
  );
}

export default Footer;
