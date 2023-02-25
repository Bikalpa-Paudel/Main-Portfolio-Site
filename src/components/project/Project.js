import './Project.css'
import Project1 from './Project1'

export default function Project(){
    return(
    <section id="project">
        <div className="project-container">
            <div className="project-info">
                <h1 className="project-text">Project</h1>
                <p className="project-para">I guess, building projects while learing is the best way to understand what we need to know. Here are some of my project that I have made. To checkout more small projects visit my github profile</p>
            </div>
            <Project1 />
        </div>
    </section>
    )

}