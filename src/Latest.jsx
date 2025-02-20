import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./App.css";

export const Latest = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        setProjects(res.data.projects);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <section className="HomeSec3" id="latest">
      <motion.div
        className="SecText"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h3>Latest builds.</h3>
        <Link to="/products">View Projects</Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {projects.length > 0 ? (
            projects.slice(0, 5).map((project) => (
              <SwiperSlide key={project.id}>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={project.photo}
                    alt={project.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                  />
                </motion.a>
              </SwiperSlide>
            ))
          ) : (
            <p>Loading projects...</p>
          )}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Latest;
