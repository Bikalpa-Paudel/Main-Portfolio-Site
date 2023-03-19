import './Navbar.css'
import Logo from './navImages/logo.png'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'







export default function Navbar(){
    return(
        <nav className="nav">
            <div className="nav-logo"><img src={Logo} alt="Logo" className="logo" /></div>
            <ul className="nav-icons">
                <li><a href="#home" className="icon home">Home</a></li>
                <li><a href="#about" className="icon about">About</a></li>
                <li><a href="#experience" className="icon experience">Experience</a></li>
                <li><a href="#project" className="icon project">Project</a></li>
                <li><a href="#contact" className="icon contact">Contact</a></li>
            </ul>
            {/* <div className="github"><a href="https://github.com/Bikalpa-Paudel" target='blank_'><BsGithub className='github-icon'/></a></div> */}
            <div className="ham-burger"><AiOutlineMenu className='ham-burger-icon'/></div>
        </nav>
    )
}