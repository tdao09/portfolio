import '../css/footer.css';
import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa'

export default function Footer() {
    return(
        <footer className="footer">
            <div className="copy-div">
                <div className="footer-container">
                    <p className="copy">&copy;Travon Dao 2024</p>
                    <p>| Made with React & Bootstrap</p>
                </div>
             
            </div>
            <div className="list-div">
                <a href="mailto:travondao@gmail.com"><FaEnvelope className="envelope-logo"/></a>
                <a href="https://www.linkedin.com/in/travon-dao-3490221b3/" target="_blank" rel="noreferrer"><FaLinkedin className="linkedin-logo"/></a>
                <a href="https://github.com/tdao09" target="_blank" rel="noreferrer"><FaGithub className="github-logo"/></a>
            </div>
        </footer>
    );
}