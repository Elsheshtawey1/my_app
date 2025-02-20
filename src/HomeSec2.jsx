import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./App.css";

export const HomeSec2 = () => {
  return (
    <section className="HomeSec2">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <motion.div
              className="Sec2Imgs"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img
                src="/images/623506fac432155edb494f48_Topology-2 (1).svg"
                alt=""
                className="waves"
              />
              <img
                src="/images/6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg"
                alt=""
                className="people"
              />
            </motion.div>
          </Col>

          <Col md={6} sm={12}>
            <motion.div
              className="sec2text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                The Dream
              </motion.button>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                Imagine having your sales team on the job 24/7, interacting with
                an endless stream of ready-to-buy visitors.
              </motion.p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSec2;
