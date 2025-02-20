import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./App.css";

const Service = () => {
  return (
    <section className="HomeSec5" id="service">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Why Webflow.
      </motion.h2>

      <motion.img
        src="images/6179978654e4d77bdbc81721/623506fac432155edb494f48_Topology-2%20(1).svg"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <Container>
        <Row>
          {[
            {
              id: 1,
              title: "Next-Level Storytelling",
              image:
                "images/62966934fc028e3715017571_undraw_mobile_development_re_wwsn 1.svg",
              description:
                "Unleash the best visuals and experiences that modern web design has to offer. Webflow turns your wildest of ideas into strategic customer-experiences.",
            },
            {
              id: 2,
              title: "Unbelievable Performance",
              image:
                "images/62966cbb57bfa16e79fe8406_undraw_data_re_80ws 1 (1).svg",
              description:
                "Hosted on an ultra-fast global CDN, Webflow goes full steam ahead with load speed, uptime, asset optimization, and SEO. All without ever needing to install a patch or upload a server configuration.",
            },
            {
              id: 3,
              title: "Developer-Free Tweaks",
              image:
                "images/62966cd0f71f4f702ab6febd_undraw_asset_selection_re_k5fj 1.svg",
              description:
                "Webflow’s ‘Editor Mode’ allows any team member to update content as they please without wreaking havoc or paying people like us to fix it.",
            },
          ].map((item, index) => (
            <Col md={4} sm={12} key={item.id}>
              <motion.div
                className="service-box"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h5>REASON {item.id}</h5>
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} />
                <p>{item.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
