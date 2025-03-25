import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./sideCanvas.scss";
import FlipLink from "../FlipLink/FlipLink";

function SideCanvas() {
  const [isSideCanvasVisible, setIsSideCanvasVisible] = useState(false);

  const handleClose = () => {
    setIsSideCanvasVisible(!isSideCanvasVisible);
  };

  return (
    <>
      <button onClick={() => setIsSideCanvasVisible(!isSideCanvasVisible)}>
        Toggle Off-Canvas
      </button>
      <AnimatePresence>
        {isSideCanvasVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="canvas-backdrop"
            ></motion.div>
            <motion.div
              initial={{ x: "100%" }} // Or y: '-100%' for top/bottom
              animate={{ x: 0 }} // Or y: 0
              exit={{ x: "100%" }} // Or y: '-100%'
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="side-Canvas"
            >
              <motion.div className="side-Canvas-Content">
                <div className="off-Canvas-Head"></div>
                <div className="off-Canvas-body">
                  <FlipLink onClick={handleClose} href="/About">
                    About
                  </FlipLink>
                </div>
                <div className="off-Canvas-Footer"></div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default SideCanvas;
