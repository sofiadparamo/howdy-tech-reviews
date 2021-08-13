import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

//The navigationbar that links to other pages
const NavigationBar = () => (
  <header>
    <nav>
        <div className="nav-buttons">
            <div className="logo ltr"/>
            <Link className="link ltr" to="/">Home</Link>
            <Link className="link ltr" to="/NewPostPage">New Post</Link>
            <div className="space"/>
            <Link className="link rtl" to="/login">Login</Link>
            <Link className="link rtl" to="/register">Register</Link>
        </div>
    </nav>
  </header>
)

export default NavigationBar
