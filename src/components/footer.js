import '../css/footer.css';

export default function Footer() {
    return(
        <footer className="footer">
            <div className="copy-div">
                <p className="copy">&copy;Travon Dao 2024</p>
            </div>
            <div className="list-div">
                <ul>
                    <li><a href="mailto:travondao@gmail.com">travondao@gmail.com</a></li>
                    <li><a href="https://www.linkedin.com/in/travon-dao-3490221b3/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/tdao09" target="_blank" rel="noreferrer">GitHub</a></li>
                </ul>
            </div>
            
        </footer>
    );
}