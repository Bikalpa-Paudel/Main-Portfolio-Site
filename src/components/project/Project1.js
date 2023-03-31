import './Project1.css'
export default function Project1(props) {
    console.log(props.url);
    return (
        <>
            <div className="project-card">
                <img src={props.url} className="project-image" alt='project'/>
                <div className="project-btns">
                    <div className="live-btn project-btn">Live Demo</div>
                    <div className="code-btn project-btn">Source Code</div>
                </div>
            </div>
        </>
    )
}