import React, { Component, Fragment } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
} from "react-bootstrap";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      message: "",
      agree: false,
    };
  }

  handleInputChange = (event) => {
    // called for all input fields, but only the agree property is updated in the state object:
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    document.title = "PlatePal | Contact";

    return (
      <div>
        <Fragment>
          <Container>
            <h1>Send us your feedback!</h1>

            <Form onSubmit={this.handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="number"
                    name="mobile"
                    placeholder="Mobile"
                    value={this.state.mobile}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Row>

              <Form.Label>Message</Form.Label>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Leave a message here"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  // placeholder="Leave a comment here"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  style={{ height: "200px" }}
                />
              </FloatingLabel>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="May we contact you?"
                  name="agree"
                  checked={this.state.agree}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Fragment>
      </div>
    );
  }
}

export default Contact;
