import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import AnimatedRoutes from '../AnimatedRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App
