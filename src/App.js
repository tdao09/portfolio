//import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home.js';
import About from './pages/about.js';
import Resume from './pages/resume.js';
import Projects from './pages/projects.js';
import Project from './pages/project.js';

import {Routes, Route} from 'react-router-dom';
export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<Project />} />
        
    </Routes>
  );
}
