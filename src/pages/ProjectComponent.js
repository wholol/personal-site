import { useState } from "react";
import {FaGithub} from "react-icons/fa";

const ProjectComponent = ({
    activeGifLink, 
    staticImage, 
    projectComponentClassName, 
    projectDescriptionClassName, 
    projectTitle,
    projectDescription, 
    githubLink}) => {

    const [currentProjectDisplayImage, setCurrentProjectDisplayImage] = useState(staticImage);

    const handleMouseEnter = (e) => {
        setCurrentProjectDisplayImage(activeGifLink);
    }

    const handleMouseLeave = (e) => {
        setCurrentProjectDisplayImage(staticImage);
    }

    return (    
        <div id='project-parent'>
            <a href={githubLink} target="_blank" rel="noreferrer">
                <img className={projectComponentClassName} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={currentProjectDisplayImage} alt=""/>
            </a>
            <div className={projectDescriptionClassName}>
                <h3>{projectTitle}</h3>
                <p>{projectDescription}</p>
                <a href={githubLink} target="_blank" rel="noreferrer"><FaGithub className="github-icon"></FaGithub></a>
            </div>
        </div>
    )
}


export default ProjectComponent;