import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss'
import AnimatedRoutes from '../AnimatedRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Menu from '../Components/Menu/Menu';

function App() {


  return (
    <Router>
      
      <AnimatedRoutes />
    </Router>
  )
}

export default App
