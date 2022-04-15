import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validateEmail } from "../utils/helpers";
import API from "@aws-amplify/api";

const randInt = (Math.random() * 10000, 10).toString();
const iFrameSrc = `https://www.peopleperhour.com/hire/widget/4025846952/7127792?width=245&height=320&orientation=vertical&theme=dark&rnd=${randInt}`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: any) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (!name) {
      setError("A valid name is required.");
      return;
    }
    if (!validateEmail(email) || !email) {
      setError("A valid email is required.");
      return;
    }

    if (!message) {
      setError("Message is required");
      return;
    }
    const msg =
      "Thank you for your message, " +
      name +
      "! I will get back to you as soon as possible.";

    const data = {
      body: {
        name,
        email,
        message,
      },
    };

    try {
      const apiData = await API.post("jamielivirestapi", "/contact", data);
      console.log("🚀 ~ apiData", apiData);
      setWelcomeMessage(msg);
    } catch (error) {
      setError(
        "An unknown error has occurred. Check your internet connection."
      );
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container>
      <Row>
        <div className="jumbotron jumbotron-fluid mb-0">
          <Container>
            <h2 className="pb-0 pb-sm-0 pb-md-0 mb-2 text-center">
              Contact Me
            </h2>
            <p className="pb-0 pb-sm-0 pb-md-0 mb-2 text-center">
              All projects big or small are welcome.
            </p>
          </Container>
        </div>
      </Row>

      <Row>
        <Container>
          <Form className="form">
            <Form.Group>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type="text"
                placeholder="Ener name"
                name="name"
                value={name}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type="email"
                placeholder="name@example.com"
                name="email"
                value={email}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                as="textarea"
                rows={3}
                required
                name="message"
                value={message}
              />
            </Form.Group>

            {!welcomeMessage && (
              <Button
                variant="primary"
                className="p-2 my-2"
                type="submit"
                onClick={handleFormSubmit}
              >
                Submit
              </Button>
            )}
          </Form>
          {error && (
            <div>
              <p className="error-text">{error}</p>
            </div>
          )}
          {!!welcomeMessage && (
            <Alert variant="success" className="my-2">
              <p>{welcomeMessage}</p>
            </Alert>
          )}
        </Container>
      </Row>
      <div id="pph-hireme">
        <iframe
          title="peopleperhour"
          src={iFrameSrc}
          width="245"
          height="320"
          scrolling="no"
        ></iframe>
      </div>
    </Container>
  );
};

export default Contact;
