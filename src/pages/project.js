import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import projectsData from '../data/projects.json'; 
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

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
        return(
         
            <section>
                <Navbar />
                <h1>{projectData.name}</h1>
                <p>{projectData.paragraph}</p>
                <p>I used these languages: {projectData.languages}</p>
                <p>{projectData.frameworks? "I used these frameworks: " + projectData.frameworks : ""}</p>
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