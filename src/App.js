//import './App.css';

import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Resume from './pages/resume.js';
import Projects from './pages/projects.js';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/projects" element={<Projects />}/>
    </Routes>
  );
}

export default App;
