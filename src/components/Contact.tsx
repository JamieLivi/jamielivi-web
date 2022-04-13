import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// + Import the validators
import { validateEmail } from "../utils/helpers";
import API from "@aws-amplify/api";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: any) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = async (e: any) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    setError("");

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!name) {
      setError("A valid name is required.");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
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
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container>
      <Row>
        <div className="jumbotron jumbotron-fluid mb-0">
          <Container>
            <h1 className="display-4 pb-0 pb-sm-0 pb-md-0 mb-2 text-center">
              Contact Me
            </h1>
          </Container>
        </div>
      </Row>

      {/* Image of me and a paragraph next to the picture built in Bootstrap */}
      <Row>
        <Container>
          <Form className="form">
            <Form.Group>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type="text"
                placeholder="Enter name"
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
    </Container>
  );
};

export default Contact;
