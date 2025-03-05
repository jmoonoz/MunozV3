import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FlipText from "../../Components/FlipText/FlipText";
import TiltCard from "../../Components/TiltCard/TiltCard";
import "./about.scss";

function About() {
  return (
    <Container
      className="about"
      key="/"
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{ duration: 2, staggerChildren: 0.15 }}
      fluid
    >
      <Row>
        <Col sm={12} md={4}>
          <div>
            <TiltCard />
          </div>
        </Col>
        <Col sm={12} md={4}>
          <h5 className="secTitle">Designer / Creator</h5>
          <div>
            <p className="sectionText">
              Joel Muñoz, a graphic designer and web specialist who believes
              that art knows no limits. As a first-generation Mexican American
              college graduate, I’ve pushed my creativity from pencil sketches
              to immersive digital experiences—blending drawn graphics with
              clean, functional code.
            </p>
            <p className="sectionText">
              With a double major in Psychology and Computer Science, I combine
              creative vision with analytical thinking to design intuitive,
              engaging websites. My skills in HTML5, CSS3, Sass, React,
              Bootstrap, and JavaScript have fueled projects ranging from
              cloning platforms like Netflix and Spotify to launching my own
              live site.
            </p>
            <p className="sectionText">
              I also create under my artistic alter ego,{" "}
              <a href="/Moonoz" className="moonozLink">
                Moonoz
              </a>
              , exploring the intersection of traditional art and digital media.
              Whether designing graphics or developing websites, I’m passionate
              about crafting digital spaces that are visually striking,
              meaningful, and accessible.
            </p>
            <p className="sectionText">
              Today, I’m focused on pushing the boundaries of web development,
              using technologies like React, Framer Motion, and Wix Studio to
              build dynamic, modern experiences.
            </p>
          </div>
        </Col>
        <Col className="colAlign" sm={12} md={4}>
          <h5 className="secTitle">Tech Focus</h5>
          <p className="sectionText">
            With hands-on experience in the latest technologies, I’ve developed
            and optimized projects that showcase both functionality and design.
            I specialize in using the following tools and languages to create
            dynamic, responsive web experiences:
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
