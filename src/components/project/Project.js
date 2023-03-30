import './Project.css'
import Project1 from './Project1'

export default function Project(){
    return(
    <section id="project">
        <div className="project-text">Projects</div>
        <div className="project-container">
            <Project1 />
            <Project1 />
            <Project1 />
            <Project1 />
        </div>
    </section>
    )

}