import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { motion } from "framer-motion";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// components
import Footer from "./Footer";
import Form from "./Form";
import Service from "./Service";
import Process from "./Process";
import Latest from "./Latest";
import HomeSec2 from "./HomeSec2";
import Banner from "./Banner";

function Home() {
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
      {/* Banner Section */}
      <Banner />
      {/* Section 2 */}
      <HomeSec2 />
      {/* Section 3 - Swiper Carousel */}
      <Latest />
      {/* start fourth section  */}
      <Process />
      {/* start fifth section  */}
      <Service />
      {/* start sixth section form */}
      <Form />
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Home;
