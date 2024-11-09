import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import MyLogo from './MyLogo'; 
import Man from './Man';
import Women from "./Women"


const App = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<MyLogo />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/man' element={<Man/>}/>
          <Route path='/woman' element={<Women/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
