
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
    return (
       <section>
        <button type="button" className="btn btn-primary" width="500px">Primary Button</button>
        <Navbar />
        <div className="intro-container">
            <div className="intro-text">
                <h1 className="intro-title">Hello, my name is Travon</h1>
                <p>Full-stack web developer with experience in UX Design and Human-Subjects Research</p>
                <p>Graduated from the University of Washington, Seattle with B.S. in Informatics and B.A. in Psychology</p>
            </div>
            <div className="intro-pic">
                <img className="Travon-portrait-home" src="./img/Travon.jpg" alt="Travon Dao"/>
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