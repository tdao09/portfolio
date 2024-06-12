import '../css/project-card.css';
import { useNavigate } from 'react-router-dom';
import {FaGithub} from 'react-icons/fa'

// props.data.thumbnail-url
export default function ProjectCard(props) {
    const navigation = useNavigate();

   function handleCardClick() {
        navigation("/project?name=" + props.data.urlParam);
   }

    return(
        <div className="project-card" id={`${props.data.name}-project`}>
            <img src={props.data.thumbnail} alt={`${props.data.name} project card`}/>
            <h2 className="project-title">{props.data.name}</h2>
           
            <p className="project-description">{props.data.description}</p>
            <button className="btn btn-dark project-button" onClick={handleCardClick}>Read More</button>
            
           {props.data.github?  <a href={props.data.github} target="_blank" rel="noreferrer"><FaGithub className="gh-logo" alt="Github logo"/></a>: null}

           {props.data.url? <a className="visit" href={props.data.url} target="_blank" rel="noreferrer">Visit Site</a>: null}
           
        </div>
    );
}

//  <p className="project-caption">{props.data.caption}</p>