import React, { useState } from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegFolder } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInOut } from "../../animation";
import "./menu.scss";

function Menu(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <Navbar className="navBar" expand="md" fixed="top">
      <Container fluid>
        <motion.div
          className="nav-Flow"
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <motion.div variants={fadeInOut} className="nav-Logo">
            <Link to="/">MNZ</Link>
          </motion.div>
          {/* folder button */}
          <motion.div variants={fadeInOut}>
            <FaRegFolder onClick={handleShow} size={30} />
          </motion.div>
          {/* off canvas */}
          <Offcanvas
            className="off-Canvas-Nav"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            {/* off canvas Header */}
            <Offcanvas.Header>
              <div className="navLogo">
                <Link onClick={handleClose} to="/">
                  MNZ
                </Link>
              </div>
              {/* close button */}
              <motion.div
                initial="hidden"
                animate="show"
                exit="exit"
              ></motion.div>
              <FaRegFolder onClick={handleClose} size={30} />
            </Offcanvas.Header>
            {/* off canvas body */}
            <Offcanvas.Body>body</Offcanvas.Body>
          </Offcanvas>
        </motion.div>
      </Container>
    </Navbar>
  );
}

export default Menu;
