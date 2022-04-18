import { useEffect } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavItem from "./NavItem";

const Layout = () => {
  let { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container fluid className="p-0 m-0">
      <Row className="p-0">
        <Col className="text-center p-0">
          <div className="jumbotron-fluid my-2">
            <h1 className="mb-0 pb-0 fw-bold">Jamie Livingstone</h1>
            <h4 className="py-0 my-0 fs-6 fw-normal">Full Stack Developer</h4>
            <h4 className="py-0 my-0 fs-6 fw-normal text-wrap">{`Expert in mobile apps, web apps & websites`}</h4>
          </div>
        </Col>
        <header>
          <div>
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
              <Container>
                <div></div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <NavItem section="about" link="/" />
                    <NavItem section="skills" />
                    <NavItem section="portfolio" />
                    <NavItem section="contact" />
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </header>
      </Row>
      <Container fluid className="pt-3">
        <main>
          <Outlet />
        </main>
      </Container>
      <Container fluid>
        <Footer />
      </Container>
    </Container>
  );
};

export default Layout;
