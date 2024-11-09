import React from 'react';
import "./App.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
        <div><Link to='/'><img src="/image/brand_logo.png" alt="Logo" /></Link></div>
      <ul>
        <li><Link to='/home'><b>Home</b></Link></li>
        <li><Link to='/shop'><b>Shop</b></Link></li>
        <li><Link to='/services'><b>New Arrivals </b></Link></li>
        <li><Link to='/contact'><b>Sale</b></Link></li>
      </ul>
    </nav>
  );
}
