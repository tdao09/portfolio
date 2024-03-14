
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../css/home.css';
//import * as ReactIcons from 'react-icons/fa'

export default function Home() {
    return (
       <section>
        <Navbar />
        <div className="intro-container">
            <div className="intro-text">
                <h1 className="intro-title">Hello, my name is Travon</h1>
                <p>Full-stack web developer with experience in UX Design and Human-Subjects Research</p>
                <p>Graduated from the University of Washington, Seattle with B.S. in Informatics and B.A. in Psychology</p>

                <div className="skills">
                    <img className="java-logo" src="./assets/logos/java.png" alt="java logo"/>
                    <img className="python-logo" src="./assets/logos/python.png" alt="python logo"/>
                    <img className="sql-logo" src="./assets/logos/sql.png" alt="sql logo"/>
                    <img className="html-logo" src="./assets/logos/html.png" alt="html logo"/>
                    <img className="css-logo"src="./assets/logos/css.png" alt="css logo"/>
                    <img classname="js-logo" src="./assets/logos/javascript.png" alt="javascript logo"/>
                    <img className="node-logo" src="./assets/logos/node.png" alt="node logo"/>
                    <img className="express-logo" src="./assets/logos/express.png" alt="express logo"/>
                    <img className="react-logo" src="./assets/logos/react.png" alt="react logo"/>
                    <img className="mongo-logo" src="./assets/logos/mongo.png" alt="mongoDB logo"/>
                </div>
                
            </div>
            <div className="intro-pic">
                <img className="Travon-portrait-home" src="./img/travon.jpg" alt="Travon Dao"/>
            </div>
        </div>

        <div className="project-section">
            <h1 className="projects">Favorite Projects</h1>
            <div className="project-container">
                

            </div>
        </div>

        <Footer />
       </section>
    );
}