
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

import '../css/resume.css';

export default function Resume() {
    return(
        <section>
            <Navbar />
            <h1>Resume (reminder to change to most up to date)</h1>
            <iframe className="pdf-file" src="./assets/Travon Dao Resume.pdf" />
            <Footer />
        </section>
    );
}