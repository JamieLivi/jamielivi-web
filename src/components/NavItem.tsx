import { Link } from "react-router-dom";
import capitalize from "lodash/capitalize";
import Nav from "react-bootstrap/Nav";

const NavItem = ({ section, link }: { section?: string; link?: string }) => {
  const title = capitalize(section);
  // const linkTo = section ? section : '/'
  return (
    <Nav.Item>
      <Nav.Link
        to={link || section || "/"}
        href={link || `/${section}`}
        as={Link}
      >
        {title}
      </Nav.Link>
    </Nav.Item>
  );
};

export default NavItem;
