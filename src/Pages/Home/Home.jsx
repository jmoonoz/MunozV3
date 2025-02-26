import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "motion/react";

function Home() {
  const DURATION = 1.8;
  const STAGGER = 0.0;
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
      <Container>
        <Row>
          <Col>
            {lastName.split("").map((l, i) => {
              <motion.span key={i}>{l}</motion.span>;
            })}
            home
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Home;
