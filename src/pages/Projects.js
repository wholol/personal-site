import ProjectComponent from "../Components/ProjectComponent";
import teapot from "../assets/teapot.png"
import pathFinding from "../assets/pathFinding.png"
import mandrelBrot from '../assets/mandelbrot.png'
import rayTracer from '../assets/raytracer.png';
import rayTracerActiveImg from '../assets/rayTracerActiveImg.png';

const projectDescriptionRasterizer = "A 3D software renderer written from scratch with C++ and SDL2. Some features include Phong shading, Gouraud shading, flat shading, clipping and a camera";
const projectDescriptionPathFinding = "A desktop application that simulates various path finding/graph search algorithms, written in C++ and SFML.";
const projectDescriptionMandrelBotSimulation = "A simulation of the Mandrelbot set. Performance improvements such as SIMD and multithreading are used and the results are benchmarked and compared."
const projectDescriptionRayTracer = "A program that does ray tracing from the series 'Ray Tracing in a weekend'. Basic multithreading and a Bounding Volume Hierachy tree implemented to improve performance."

const projectFactory = (activeGifLink, 
    staticImage, 
    projectComponentClassName, 
    projectDescriptionClassName, 
    projectTitle,
    projectDescription, 
    githubLink) => {
    
    const projectComponentProps = {};
    projectComponentProps.activeGifLink = activeGifLink;
    projectComponentProps.staticImage = staticImage;
    projectComponentProps.projectComponentClassName = projectComponentClassName;
    projectComponentProps.projectDescriptionClassName = projectDescriptionClassName;
    projectComponentProps.projectTitle = projectTitle;
    projectComponentProps.projectDescription = projectDescription;

    return projectComponentProps;
}


const Projects = () => {

    return(
    <div class='background-color-page' className="ProjectComponents">
        <p id='project-heading'>Here are some of me featured projects. You can find more projects that I have worked on on my <a id='github-link' href="https://github.com/wholol">GitHub</a> page.</p>  
        <ProjectComponent
            activeGifLink={"https://media.giphy.com/media/RlaeNoANQeAYzCNUwz/giphy.gif"} 
            staticImage={teapot} 
            projectTitle='3D Software Renderer'
            projectDescription={projectDescriptionRasterizer}
            githubLink='https://github.com/wholol/3D-Renderer'>   
        </ProjectComponent>

        <ProjectComponent
            activeGifLink={"https://media.giphy.com/media/Q7jzMfHD1RxNymUbZ6/giphy.gif"} 
            staticImage={pathFinding} 
            projectTitle='Pathfinding Visualizer'
            projectDescription={projectDescriptionPathFinding}
            githubLink='https://github.com/wholol/graph-visualizer'>    
        </ProjectComponent>

        <ProjectComponent
            activeGifLink={"https://media.giphy.com/media/7JwAKB6g2mFiskRtda/giphy.gif"} 
            staticImage={mandrelBrot} 
            projectTitle='Mandelbrot Simulation'
            projectDescription={projectDescriptionMandrelBotSimulation}
            githubLink='https://github.com/wholol/Mandelbrot-SIMD-MultiThreading'>    
        </ProjectComponent>

        <ProjectComponent
            activeGifLink={rayTracerActiveImg} 
            staticImage={rayTracer}
            projectTitle='Static ray tracer'
            projectDescription={projectDescriptionRayTracer}
            githubLink='https://github.com/wholol/ray-tracer'>    
        </ProjectComponent>
    </div>
    )
    
}

export default Projects;