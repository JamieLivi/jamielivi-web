import { useEffect, useRef } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import "../styles/header.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  let { pathname } = useLocation();
  const navRef = useRef(null);

  const onClickLink = () => {
    console.log(navRef.current);
  };

  useEffect(() => {
    // ga("send", "pageview");
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container fluid className="p-0 m-0">
      <Container fluid className="p-0">
        <Row className="p-0">
          <Col className="text-center p-0" md={12}>
            <div className="jumbotron-fluid my-2">
              <h1 className="mb-0 pb-0 fw-bold">Jamie Livingstone</h1>
              <h4 className="py-0 my-0 fs-6 fw-normal">Full Stack Developer</h4>
              <h4 className="py-0 my-0 fs-6 fw-normal text-wrap">{`Expert in mobile apps, web apps & websites`}</h4>
            </div>
          </Col>
          <header>
            <div></div>
            <div>
              <Container fluid className="p-0">
                <Navbar
                  //    onSelect={() => console.log("onselect")}
                  ref={navRef}
                  //      collapseOnSelect
                  bg="dark"
                  variant="dark"
                  className="px-2 p-sm-0"
                  //        id="navbar-collapse-id"
                  expand="sm"
                >
                  <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav px-3 px-sm-1 px-md-0" />

                    <Navbar.Collapse
                      //    onSelect={() => console.log("onselect2")}
                      id="responsive-navbar-nav"
                    >
                      <Nav
                        //     onSelect={() => console.log("onselevct3")}
                        className="px-3 px-sm-1 px-md-0"
                      >
                        {/* <Nav.Item onSelect={() => console.log("onselect3")}>
                          <Nav.Link
                            onClick={onClickLink}
                            className="nav-link"
                            //    to="/"
                          >
                            Test
                          </Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                          <Link
                            onClick={onClickLink}
                            className="nav-link"
                            to="/"
                          >
                            About
                          </Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link className="nav-link" to="skills">
                            Skills
                          </Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link className="nav-link" to="portfolio">
                            Portfolio
                          </Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link className="nav-link" to="contact">
                            Contact
                          </Link>
                        </Nav.Item>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </Container>
            </div>
          </header>
        </Row>
      </Container>
      <Container fluid>
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
