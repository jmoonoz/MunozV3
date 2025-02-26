import React from "react";
import { AnimatePresence } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
