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
  render() {
    return (
      <div>
        <Fragment>
          <Container>
            <h1>Send us your feedback!</h1>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="number" placeholder="Mobile" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Row>

              <Form.Label>Message</Form.Label>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Leave a message here"
                className="mb-3"
              >
                <Form.Control as="textarea" style={{ height: "200px" }} />
              </FloatingLabel>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="May we contact you?" />
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
