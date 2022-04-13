import { Col, Card } from "react-bootstrap";

interface Props {
  name: string;
  about: string;
  image: string;
  children?: any;
}

const Project = ({ name, about, children, image }: Props) => {
  const imgSrc = require(`../assets/images/${image}.png`);
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={imgSrc} alt={name} className="p-4" />
        <Card.Body className="mx-auto">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{about}</Card.Text>
        </Card.Body>
        <Card.Footer className="w-100">{children}</Card.Footer>
      </Card>
    </Col>
  );
};

export default Project;
