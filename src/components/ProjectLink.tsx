import React from "react";
import { Button } from "react-bootstrap";

interface Props {
  text: string;
  link: string;
}

const ProjectLink = ({ text, link }: Props) => {
  return (
    <Button variant="primary p-2 my-1 me-1" href={link}>
      {text}
    </Button>
  );
};

export default ProjectLink;
