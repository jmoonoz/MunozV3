import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { slideUp } from "../../animation";
import Munoz from "../../Images/mexicoHat.png";
import { imgFadein } from "../../animation";
import "./home.scss";
import SideCanvas from "../../Components/SideCanvas/SideCanvas";

function Home() {
  const DURATION = 1.8;
  const STAGGER = 0.02;
  const lastName = "Muñoz";
  return (
    <motion.div
      key="/"
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{
        delayChildren: 0.1,
        staggerChildren: 1.5,
      }}
      className="home"
    >
      <motion.img variants={imgFadein} className="hero-Me" src={Munoz} />
      <Container>
        <Row>
          <Col>
            <div className="hero-Title">
              {lastName.split("").map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", rotate: "-15deg" }}
                  animate={{
                    y: 0,
                    rotate: "0deg",
                    transition: {
                      duration: DURATION,
                      type: "spring",
                      delay: STAGGER * i,
                      ease: [0.12, 0, 0.39, 0],
                    },
                  }}
                  exit={{
                    y: "100%",
                    rotate: "-15deg",
                    transition: {
                      duration: 0.4,
                      type: "spring",
                      delay: STAGGER * i,
                      ease: [0.12, 0, 0.39, 0],
                    },
                  }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={7} sm={8} md={8}></Col>
          <Col className="home-Desc" xs={2} sm={2} md={1} lg={1}>
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              className="home-Title-Text"
            >
              {/* first set of text */}
              <div>
                <motion.div variants={slideUp}>Designer</motion.div>
              </div>
              <div>
                <motion.div variants={slideUp}>Developer</motion.div>
              </div>
            </motion.div>
            {/* second set of text */}
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              className="home-Title-Text-2"
            >
              <div>
                <motion.div variants={slideUp}>¡Echándole</motion.div>
              </div>
              <div>
                <motion.div variants={slideUp}>Ganas!</motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Home;
