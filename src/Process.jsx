import React from "react";
import { motion } from "framer-motion";
import "./App.css";

export const Process = () => {
  return (
    <section className="HomeSec4" id="process">
      {/* عنوان القسم */}
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        How it's done.
      </motion.h3>

      {/* صورة الخلفية */}
      <motion.img
        src="images/623506fac432155edb494f48_Topology-2%20(1).svg"
        alt=""
        className="waves"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false, amount: 0.2 }}
      />

      {/* الخطوات */}
      {[
        {
          img: "images/6232406724bd9b36622aed48_image 3 (Traced).svg",
          title: "UX/UI Design",
          text: "Where concepts turn into a strategic user-experience.",
          align: "left",
          delay: 0.1,
        },
        {
          img: "images/623240674411e07510215b6f_image 2 (Traced).svg",
          title: "Webflow Development",
          text: "Where design turns into code.",
          align: "right",
          delay: 0.5,
        },
        {
          img: "images/6296648937731de4e98d9a5a_zapier-seeklogo.com 2.svg",
          title: "System Automation",
          text: "Where busywork gets delegated.",
          align: "left",
          delay: 1.0,
        },
        {
          img: "images/62324067d42bfc263ee547ff_image 4 (Traced).svg",
          title: "SEO",
          text: "Where customers come flooding in.",
          align: "right",
          delay: 1.5,
        },
      ].map((step, index) => (
        <motion.div
          key={index}
          className={`div${step.align.charAt(0).toUpperCase() + step.align.slice(1)}`}
          initial={{ opacity: 0, x: step.align === "left" ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: step.delay }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src={step.img} alt="" />
          <div>
            <h5>{step.title}</h5>
            <p>{step.text}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Process;
