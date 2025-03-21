import { React, useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeInOut } from "../../animation";
import ProjectInfo from "../../Components/ProjectItem/Project";
import ProjectItems from "../../Components/ProjectItem/ProjectItem";
import "./project.scss";

function Projects(props) {
  const [projectData, setProjectData] = useState(ProjectInfo);
  return (
    <Container className="project">
      <motion.div
        key="/contact"
        initial="hidden"
        animate="show"
        exit="exit"
        transition={{ staggerChildren: 0.25 }}
      >
        <div className="project-all-item">
          {projectData.map((item) => (
            <motion.div variants={fadeInOut}>
              <ProjectItems
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                link={item.link}
                projectLink={item.projectLink}
                linkName={item.linkName}
                tool={item.tools}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}

export default Projects;
