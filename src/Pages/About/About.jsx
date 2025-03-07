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
          <h5 className="secTitle">
            <FlipText>Designer / Creator</FlipText>{" "}
          </h5>
          <div>
            <p className="sectionText">
              <FlipText>
                Joel Muñoz, a graphic designer and web specialist who believes
                that art knows no limits. As a first-generation Mexican American
                college graduate, I’ve pushed my creativity from pencil sketches
                to immersive digital experiences—blending drawn graphics with
                clean, functional code.
              </FlipText>
            </p>
            <p className="sectionText">
              <FlipText>
                With a double major in Psychology and Computer Science, I
                combine creative vision with analytical thinking to design
                intuitive, engaging websites. My skills in HTML5, CSS3, Sass,
                React, Bootstrap, and JavaScript have fueled projects ranging
                from cloning platforms like Netflix and Spotify to launching my
                own live site.
              </FlipText>
            </p>
            <p className="sectionText">
              <FlipText>
                I also create under my artistic alter ego, Moonoz, exploring the
                intersection of traditional art and digital media. Whether
                designing graphics or developing websites, I’m passionate about
                crafting digital spaces that are visually striking, meaningful,
                and accessible.
              </FlipText>
            </p>
            <p className="sectionText">
              <FlipText>
                Today, I’m focused on pushing the boundaries of web development,
                using technologies like React, Framer Motion, and Wix Studio to
                build dynamic, modern experiences.
              </FlipText>
            </p>
          </div>
        </Col>
        <Col className="colAlign" sm={12} md={4}>
          <h5 className="secTitle">
            <FlipText>Tech Focus</FlipText>
          </h5>

          <p className="sectionText">
            <FlipText>
              With hands-on experience in the latest technologies, I’ve
              developed and optimized projects that showcase both functionality
              and design. I specialize in using the following tools and
              languages to create dynamic, responsive web experiences:
            </FlipText>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
