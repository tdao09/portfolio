import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import projectsData from '../data/projects.json'; 
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../css/individualProject.css';

export default function Project() {
  
    const [searchParams] = useSearchParams();
    let projectName = searchParams.get("name");
    const [projectData, setProjectData] = useState(null);
    
    useEffect(()=> {
        const projectData = projectsData.find(project => project.urlParam === projectName);
        setProjectData(projectData);
    }, [searchParams, projectName]);

    if (!projectData) {
        return(
            <div>
                Loading project data...
            </div>
        );
    } else {
           // process paragraphs
    const contextParagraphs = projectData.context.map((currentParagraph) => {
        return(<p>{currentParagraph}</p>);
    })

    let problemParagraphs;
    if (projectData.problem) {
        problemParagraphs = projectData.problem.map((currentParagraph) => {
            return(<p>{currentParagraph}</p>);
        })
    }

    let solutionParagraphs;
    if (projectData.solution) {
        solutionParagraphs = projectData.solution.map((currentParagraph) => {
            return(<p>{currentParagraph}</p>);
        })
    }
        return(
         
            <section>
                <Navbar />
                <h1>{projectData.name}</h1>
                <h2 className="context">Context</h2>
                {contextParagraphs}
                {projectData.problem? <h2 className="problem">Problem</h2>: null}
                {projectData.problem? problemParagraphs: null}
                {projectData.solution? <h2 className="solution">Solution</h2>: null}
                {projectData.solution? solutionParagraphs: null}
                <Footer />
            </section>
        );
    }
   
}

// return(
//     <div>
//        <h1>{projectData? projectData.name : "loading"}</h1>
//     </div>
// );


/*

   <p>{projectData.paragraph}</p>
                <p>I used these languages: {projectData.languages}</p>
                <p>{projectData.frameworks? "I used these frameworks: " + projectData.frameworks : ""}</p>

*/