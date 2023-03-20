import './Ham.css'
import {BsGithub} from 'react-icons/bs'

export default function Ham(props) {

   
    return (
        <div className='ham'>
            <div className="nav-icon-ham">
                <li onClick={props.navFunction}><a href="#home" className="icon home">Home</a></li>
                <li onClick={props.navFunction}><a href="#about" className="icon about">About</a></li>
                <li onClick={props.navFunction}><a href="#experience" className="icon experience">Experience</a></li>
                <li onClick={props.navFunction}><a href="#project" className="icon project">Project</a></li>
                <li onClick={props.navFunction}><a href="#contact" className="icon contact">Contact</a></li>
                <li onClick={props.navFunction}><a href="https://github.com/Bikalpa-Paudel" target='blank_'><BsGithub className='github-icon'/></a></li>
            </div>
        </div>
    )
}