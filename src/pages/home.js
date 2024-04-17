
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../css/home.css';
//import * as ReactIcons from 'react-icons/fa'
import projectData from '../data/projects.json';
import ProjectCard from '../components/project-card.js';

export default function Home() {
    let projectDataSliced = projectData.slice(0, 3);

    let projectsArray = projectDataSliced.map((currentProjectData) => {
        return(
            <ProjectCard className={currentProjectData.name} data={currentProjectData} key={currentProjectData.name}/>
        );
    });

    return (
       <section>
        <Navbar />
        <div className="intro-container">
            <div className="intro-text">
                <h1 className="intro-title">Hello, my name is Travon</h1>
                <img className="intro-text-img" src="./img/travon.jpg" alt="Travon Dao headshot"/>
                <p>Full-stack web developer with experience in UX Design and Human-Subjects Research</p>
                <p>Graduated from the University of Washington, Seattle with B.S. in Informatics and B.A. in Psychology</p>

                <div className="skills">
                    <div className="skills-row-1">
                        <img className="java-logo" src="./assets/logos/java.png" alt="java logo"/>
                        <img className="python-logo" src="./assets/logos/python.png" alt="python logo"/>
                        <img className="sql-logo" src="./assets/logos/sql.png" alt="sql logo"/>
                        <img className="html-logo" src="./assets/logos/html.png" alt="html logo"/>
                        <img className="css-logo"src="./assets/logos/css.png" alt="css logo"/>
                    </div>

                    <div className="skills-row-2">
                        <img className="js-logo" src="./assets/logos/javascript.png" alt="javascript logo"/>
                        <img className="node-logo" src="./assets/logos/node.png" alt="node logo"/>
                        <img className="express-logo" src="./assets/logos/express.png" alt="express logo"/>
                        <img className="react-logo" src="./assets/logos/react.png" alt="react logo"/>
                        <img className="mongo-logo" src="./assets/logos/mongo.png" alt="mongoDB logo"/>
                    </div>
                </div>
            </div>
            <div className="intro-pic">
                <img className="Travon-portrait-home" src="./img/travon.jpg" alt="Travon Dao headshot"/>
            </div>
        </div>

        <div className="project-section">
            <h1 className="projects">Favorite Projects</h1>
         
            <div className="projects-container">
              {projectsArray}
            </div>
        </div>

        <Footer />
       </section>
    );
}