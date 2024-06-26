import '../css/footer.css';
import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa'

export default function Footer() {
    return(
        <footer className="footer">
            <div className="copy-div">
                <div className="footer-container">
                    <p className="copy">&copy;Travon Dao 2024</p>
                    <p className="separator">|</p>
                    <p>Made with React</p>
                </div>
             
            </div>
            <div className="list-div">
                <a href="mailto:travondao@gmail.com"><FaEnvelope className="envelope-logo" alt="Envelope logo"/></a>
                <a href="https://www.linkedin.com/in/travon-dao-3490221b3/" target="_blank" rel="noreferrer"><FaLinkedin className="linkedin-logo" alt="Linkedin logo"/></a>
                <a href="https://github.com/tdao09" target="_blank" rel="noreferrer"><FaGithub className="github-logo" alt="Github logo"/></a>
            </div>
        </footer>
    );
}