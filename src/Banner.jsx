import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import "./App.css";

export const Banner = () => {
  return (
    <section className="Banner">
      <Container>
        <Row>
          <Col md={7} sm={12} className="BannerText">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span> SEO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Mohamed ELsheshtawey Portfolio.
            </motion.h1>

            <motion.h5
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              We build marketing websites that help you sell on autopilot.
            </motion.h5>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <HashLink to="#contact">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  Let's talk
                </motion.button>
              </HashLink>
            </motion.div>
          </Col>

          <Col md={5} sm={12} className="BannerImgs">
            <motion.img
              src="images/623503637e979197919c6c03_Topology-1 (1).svg"
              alt=""
              className="waves"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            <motion.img
              src="images/623a183aa76fb537cbc5dc0e_Group 8-p-500.png"
              alt=""
              className="laptop"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
            <div className="imgbox gimg">
              <motion.img
                src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg"
                alt=""
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
            </div>
            <div className="imgbox uimg">
              <motion.img
                src="images/6232406724bd9b36622aed48_image 3 (Traced).svg"
                alt=""
                initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 1 }}
              />
            </div>
            <div className="imgbox wimg">
              <motion.img
                src="images/623240674411e07510215b6f_image 2 (Traced).svg"
                alt=""
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 1.2 }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
