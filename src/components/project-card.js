import '../css/project-card.css';
// props.data.thumbnail-url
export default function ProjectCard(props) {
   
    return(
        <div className="project-card" id={`${props.data.name}-project`}>
            <img src={props.data.thumbnail} alt={`${props.data.name} project card`}/>
            <h2 className="project-title">{props.data.name}</h2>
            <p className="project-caption">{props.data.caption}</p>
            <p className="project-description">{props.data.description}</p>
        </div>
    );
}