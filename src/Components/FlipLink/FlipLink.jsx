import React from "react";
import { motion } from "framer-motion";
import "./flipLink.scss";

const DURATION = 0.25;
const STAGGER = 0.025;

function FlipLink({ children, href }) {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="flip-Link"
      href={href}
    >
      {/* first set */}
      <div className="first-Set">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-200%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      {/* second set of text */}
      <div className="second-Set">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "200%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

    </motion.a>
  );
}

export default FlipLink;
