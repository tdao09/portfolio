import { useSearchParams, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import projectsData from '../data/projects.json'; 

export default function() {
  
    const [searchParams] = useSearchParams();
    let projectName = searchParams.get("name");
    const [projectData, setProjectData] = useState(null);
    
    useEffect(()=> {
        const projectData = projectsData.find(project => project.urlParam === projectName);
        setProjectData(projectData);
    }, [searchParams]);
   
    if (!projectData) {
        return(
            <div>
                Loading project data...
            </div>
        );
    } else {
        return(
            <div>
                <h1>{projectData.name}</h1>
                <p>{projectData.paragraph}</p>
                <p>I used these languages: {projectData.languages}</p>
                <p>{projectData.frameworks? "I used these frameworks: " + projectData.frameworks : ""}</p>
            </div>
        );
    }
   
}

// return(
//     <div>
//        <h1>{projectData? projectData.name : "loading"}</h1>
//     </div>
// );