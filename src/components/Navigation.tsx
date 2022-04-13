import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Collapse } from "react-bootstrap/Navbar";
// import { Container } from "react-bootstrap";
// import { Nav } from "react-bootstrap";
// import Navbar from "react-bootstrap/Navbar";

function Navigation(props: any) {
  const { currentTab, setCurrentTab } = props;

  return (
    <Container fluid className="p-0">
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        className="px-2 p-sm-0"
        id="navbar-collapse-id"
        expand="lg"

        //    fill
        //   activekey={currentTab}
        //   justified
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav px-3 px-sm-1 px-md-0" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              activeKey={currentTab}
              onSelect={setCurrentTab}
              className="px-3 px-sm-1 px-md-0"
            >
              <Nav.Item>
                <Nav.Link
                  onClick={() => setCurrentTab("about")}
                  eventKey="about"
                >
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => setCurrentTab("portfolio")}
                  eventKey="portfolio"
                >
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => setCurrentTab("contact")}
                  eventKey="contact"
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link
                  onClick={() => setCurrentTab("resume")}
                  eventKey="resume"
                >
                  Resume
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navigation;
