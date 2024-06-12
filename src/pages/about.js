import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js'
import '../css/about.css'
export default function About() {
    return (
       <section>
        <Navbar />
        <h1 className="title">Human-Centered Designer & Full-Stack Developer</h1>
        <div className="about-container">
            <div className="school-experience">
            <img className="self-portrait" src="./img/travon.jpg" alt="Travon Dao"/>
                <p>Hello! My name is Travon and I graduated from the University of Washington - Seattle. During my time there, I studied <strong>Informatics</strong> and <strong>Psychology</strong>. Given my multidisciplinary background, I am equipped to design for people with careful consideration for how they think, process information, and make decisions.</p>

                <p>I have experience in scientific psychology research, UX design & research, full-stack web development, product management, data science, and data modeling. With my range of skills, I have designed and developed information systems such as an informational food website, an accessible chatting application designated for older audiences, and a full-stack website where college students can rate and review study spots around their college campus. </p>

                <p>I am extremely passionate in the <strong>empowerment</strong> of marginalized communities. As the older brother of a person with autism, I dedicate myself towards finding ways to make life <strong>easier</strong> for those with intellectual disabilities through creative problem-solving and design.</p>
           </div>
        </div>
        
        <h1 className="lab-heading">Professional Experience</h1>

        <p className="lab-experience">From January - August 2023, I was a research assistant at the Language, Cognition, & Development Lab under the University of Washington's Psychology department. During my time at the lab, I ran experiments with parents and 11-month old infants, edited and transcribed videos for analysis, and performed data transformation & visualization with the R-programming language. I also wrote several technical documentations on our R-analyses.</p>
        <Footer />
       </section>
    );
}