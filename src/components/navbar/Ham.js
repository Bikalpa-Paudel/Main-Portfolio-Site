import './Ham.css'

export default function Ham() {
    return (
        <div className='ham'>
            <div className="nav-icon-ham">
                <li><a href="#home" className="icon home">Home</a></li>
                <li><a href="#about" className="icon about">About</a></li>
                <li><a href="#experience" className="icon experience">Experience</a></li>
                <li><a href="#project" className="icon project">Project</a></li>
                <li><a href="#contact" className="icon contact">Contact</a></li>
            </div>
        </div>
    )
}