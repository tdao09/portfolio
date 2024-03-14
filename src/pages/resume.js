
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

import '../css/resume.css';

export default function Resume() {
    return(
        <section>
            <Navbar />
            <h1 className="resume">Resume (reminder to change to most up to date)</h1>
            <iframe className="pdf-file" src="./assets/travon-dao-resume.pdf" title="resume"/>
            <Footer />
        </section>
    );
}