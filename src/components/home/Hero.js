import './Hero.css'
import {HiArrowDown} from 'react-icons/hi'

export default function Hero(){
    return(
        <div className='hero'>

            <h1 className="intro intro1">Hi, <span className="thin">I'M </span>BIKALPA Paudel</h1>
            <h1 className="intro intro2">A <span className="thin">Passionate </span>Web_Dev</h1> 
            <p className="intro3">My name is Bikalpa and I am from Nepal. I am a Web Developer and a learner at the same time. Learning new tech is the thing that I moslty do.</p> 
            <div className="btns">
                <div className="btn download-btn">Download CV</div>
                <div className="btn contact-btn">Contact Me</div>
            </div>
            <div className="explore">
                <HiArrowDown className='arrow'/>
            </div>

        </div>
    )
}