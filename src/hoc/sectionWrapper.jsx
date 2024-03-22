import { motion, stagger } from "framer-motion";
import React from "react";
import { staggerContainer } from "../constants/motion";

const SectionWrapper = (Component, idName) => function HOC() {
    return(
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <span id={idName}></span>
            <Component />
        </motion.section>
    )
}
export default SectionWrapper;