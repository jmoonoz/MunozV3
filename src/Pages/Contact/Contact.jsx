import { React, useState, useRef } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideUp } from "../../animation";
import "./contact.scss";

function Contact(props) {
  const [validated, setValidated] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    // prevents page refresh
    e.preventDefault();

    // sends email
    emailjs.sendForm(service, template, form.current, public_key).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // resets input
    e.target.reset();
  };

  return (
    <motion.div
      key="/Contact"
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{
        staggerChildren: .20,
      }}
      className="contact"
      style={{ width: "100vw" }}
    >
      <Container >
        <Row className="contact-row">
          <Col sm={9} md={9} lg={9} className="col-hidden">
            <Form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col className="item-hidden" sm={12} md={6} lg={6} xl={6}>
                  <motion.div variants={slideUp}>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Ex: Joel"
                      name="first"
                    />
                  </motion.div>
                </Col>
                <Col className="item-hidden" sm={12} md={6} lg={6} xl={6}>
                  <motion.div variants={slideUp}>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Munoz"
                      name="last"
                    />
                  </motion.div>
                </Col>
              </Row>
              <div className="item-hidden">
                <motion.div variants={slideUp}>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Example@email.com"
                    name="email"
                  />
                </motion.div>
              </div>
              <div className="item-hidden">
                <motion.div variants={slideUp}>
                  <Form.Label>Message:</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Write to me"
                    style={{ height: "200px" }}
                    name="message"
                  />
                  <Form.Text id="emailJS-mention" muted>
                    Powered by EmailJS
                  </Form.Text>
                  <div className="form-button">
                    <Button variant="outline-light" type="submit">
                      Submit
                    </Button>
                  </div>
                </motion.div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Contact;
