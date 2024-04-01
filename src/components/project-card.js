import '../css/project-card.css';
import { useNavigate } from 'react-router-dom';
// props.data.thumbnail-url
export default function ProjectCard(props) {
    const navigation = useNavigate();

   function handleCardClick() {
        navigation("/project?name=" + props.data.urlParam);
   }

    return(
        <div onClick={handleCardClick} className="project-card" id={`${props.data.name}-project`}>
            <img src={props.data.thumbnail} alt={`${props.data.name} project card`}/>
            <h2 className="project-title">{props.data.name}</h2>
            <p className="project-caption">{props.data.caption}</p>
            <p className="project-description">{props.data.description}</p>
        </div>
    );
}