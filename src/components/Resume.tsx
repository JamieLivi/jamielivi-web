import React from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  ListGroup,
  Button,
} from "react-bootstrap";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";

/*//----------------------------------------------------------------------------+
// - Front-End Proficiencies
// _ HTML5, CSS3, JavaScript, jQuery, Bootstrap, React, version control/Git, responsive design
// - Dev Tool Proficiencies 
// _ Git npm Jest Webpack
// - Database Proficiencies
// _ MySQL, Sequelize, NoSQL, SQLite, GraphQL, MongoDB, Mongoose */

const skillTypes = [
  {
    name: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Redux",
      "Bootstrap",
      "Version Control/Git",
      "Responsive Design",
    ],
  },
  {
    name: "Development Tools",
    skills: ["Git", "npm", "Jest", "Webpack"],
  },
  {
    name: "Database Skills",
    skills: [
      "MySQL",
      "Sequelize",
      "NoSQL",
      "SQLite",
      "GraphQL",
      "MongoDB",
      "Mongoose",
    ],
  },
];

function Resume() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="jumbotron jumbotron-fluid">
            <Container>
              <h1 className="display-4 text-center">Resume</h1>
            </Container>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-3">
          <Button href="https://github.com/lukecp5/react-portfolio/raw/main/public/Luke_Poirrier-Full_Stack_Resume.pdf">
            Download My Resume
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion>
            {skillTypes.map((skillCategory, evtKey: any) => {
              return (
                <Accordion.Item eventKey={evtKey}>
                  <AccordionHeader>{skillCategory.name}</AccordionHeader>
                  <Accordion.Body>
                    <ListGroup>
                      {skillCategory.skills.map((skill) => {
                        return <ListGroup.Item>{skill}</ListGroup.Item>;
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
