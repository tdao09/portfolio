
import style from '../css/navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav className="navbar">
            <div>
            <NavLink className="nav-name" to="/">Travon Dao</NavLink>
            </div>
            <div className="nav-list">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/resume">Resume</NavLink></li>
            </ul>
            </div>
        
        </nav>
    );
}