import React from 'react';
import { Link } from 'react-router-dom';

//The navigationbar that links to other pages
const NavigationBar = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  </header>
)

export default NavigationBar
