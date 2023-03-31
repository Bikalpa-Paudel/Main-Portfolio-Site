import './Project.css'
import Project1 from './Project1'
import proInfo from "./project-info"

export default function Project(){
    const projectInfo = proInfo.map((item) => {
        return <Project1 key={item.id} url={item.url}/>
    })
    
    return(
    <section id="project">
        <div className="project-text">Projects</div>
        <div className="project-container">
            {projectInfo}
        </div>
    </section>
    )

}