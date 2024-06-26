
import '../css/navbar.css';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
    const [showNav, toggleNav] = useState(false);
    function handleHamburgerTap() {
        toggleNav(!showNav);
    }
  
    // <li><NavLink to="/resume">Resume</NavLink></li> 
    return(
        <nav className="navbar">
                <NavLink className="nav-title" to="/">Travon Dao</NavLink>
                <ul className={`nav-list ${showNav ? "nav-open" : ""}`}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><a className="resume-button" href="./assets/travon-dao-resume.pdf">Resume</a></li>
                </ul>
                
                <FaBars className={`hamburger ${showNav ? "hamburger-open" : ""}`} alt="More options/
                        hamburger icon" onClick={handleHamburgerTap}/>
        </nav>
    );
}


// booleanName ? thisvalue : thatvalue