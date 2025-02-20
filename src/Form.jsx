import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./App.css";

function Form() {
  return (
    <section className="HomeSec6" id="contact">
      <Container>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Contact Us
        </motion.h3>

        <Row className="align-items-center">
          <Col md={6} sm={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <p>
                <span>Email:</span> info@gmail.com
              </p>
              <p>
                <span>Phone:</span> 0121133133131
              </p>
              <p>
                <span>Address:</span> 23 street newyork
              </p>
            </motion.div>
          </Col>

          <Col md={6} sm={12}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <form>
                <div className="d-flex">
                  <input type="text" name="name" placeholder="Name" />
                  <input type="text" name="company" placeholder="Company" />
                </div>
                <div className="d-flex">
                  <input type="text" name="email" placeholder="Email" />
                  <input type="text" name="phone" placeholder="Phone" />
                </div>
                <textarea name="message" placeholder="Message"></textarea>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Form;
