import React from "react";
import { motion } from "framer-motion";
import "./flipText.scss";

const DURATION = 2;
const STAGGER = 2;

function FlipText(props) {
  const pText = props.children.split("/(s+)/");
  console.log(pText);

  return (
    <div className="flipText">
      {pText.map((l, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: DURATION,
              type: "spring",
              delay: STAGGER * i,
              ease: [0.12, 0, 0.39, 0],
            },
          }}
          exit={{
            y: "100%",
            opacity: .6,
            transition: {
              duration: 0.6,
              type: "spring",
              delay: STAGGER * i,
              ease: [0.12, 0, 0.39, 0],
            },
          }}
          // style={{ display: "inline-block" }}
        >
          {l}
        </motion.span>
      ))}
    </div>
  );
}

export default FlipText;
