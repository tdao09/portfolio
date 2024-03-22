import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js'
import ProjectCard from '../components/project-card.js';
import '../css/project.css';
import projectsData from '../data/projects.json';

export default function Projects() {
    let projectsArray = projectsData.map((projectData) => {
        return <ProjectCard data={projectData} id={projectData.name} />
    });

    return(
        <section>
            <Navbar />
            <h1>Projects</h1>
            <div className="project-container">
                {projectsArray}
            </div>
            <Footer />
        </section>
    );
}