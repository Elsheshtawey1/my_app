import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { motion } from "framer-motion";
import Footer from "./Footer";
import "./App.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        setProjects(res.data.projects);
        console.log(res.data.projects);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <>
      <section className="AllProjectSec">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          All Projects
        </motion.h3>

        <motion.img
          src="images/623503637e979197919c6c03_Topology-1 (1).svg"
          alt="Waves"
          className="waves"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <Container>
          <Row>
            {projects.map((project, index) => (
              <Col md={4} sm={12} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <img src={project.photo} alt={project.title} />
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Projects;
