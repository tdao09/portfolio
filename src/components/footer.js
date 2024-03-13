import '../css/footer.css';
import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa'

export default function Footer() {
    return(
        <footer className="footer">
            <div className="copy-div">
                <p className="copy">&copy;Travon Dao 2024</p>
            </div>
            <div className="list-div">
                <ul>
                    <li><a href="mailto:travondao@gmail.com"><FaEnvelope className="envelope-logo"/></a></li>
                    <li> <a href="https://www.linkedin.com/in/travon-dao-3490221b3/" target="_blank" rel="noreferrer"><FaLinkedin className="linkedin-logo"/></a></li>
                    <li><a href="https://github.com/tdao09" target="_blank" rel="noreferrer"><FaGithub className="github-logo"/></a></li>
                    </ul>
            </div>
        </footer>
    );
}