import React from "react";
import { motion } from "framer-motion";
import "./flipText.scss";

const DURATION = 1.8;
const STAGGER = 0.02;

function FlipText(props) {
  const pText = props.children.split("");

  return (
    <p className="flipText">
      {pText.map((l, i) => (
        <motion.span
          key={i}
          initial={{ x: "200%", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}
          // animate={{
          //   y: 0,
          //   rotate: "0deg",
          //   transition: {
          //     duration: DURATION,
          //     type: "spring",
          //     delay: STAGGER * i,
          //     ease: [0.12, 0, 0.39, 0],
          //   },
          // }}
          // exit={{
          //   y: "100%",
          //   rotate: "-9deg",
          //   transition: {
          //     duration: 0.4,
          //     type: "spring",
          //     delay: STAGGER * i,
          //     ease: [0.12, 0, 0.39, 0],
          //   },
          // }}
        >
          {l}
        </motion.span>
      ))}
    </p>
  );
}

export default FlipText;
