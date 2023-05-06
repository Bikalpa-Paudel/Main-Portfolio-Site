import './Hero.css'
import {Typewriter} from 'react-simple-typewriter'

export default function Hero(){
    return(
        <div className='hero'>
            <div className="greet">
            <Typewriter
            words={['Welcome!', 'To My', 'Personal Website !!']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={130}
            deleteSpeed={70}
            delaySpeed={1000}
            />
            </div>



            <h1 className="intro intro1">Hi, <span className="thin">I'M </span>BIKALPA Paudel</h1>
            <h1 className="intro intro2">A <span className="thin">Passionate </span>Web_Dev</h1> 
            <p className="intro3">If you want someone who can deviver a frontend for the websites with best practices, I am the one</p> 
            <div className="btns">
                <div className="btn download-btn">Download CV</div>
                <div className="btn contact-btn">Contact Me</div>
            </div>
        </div>
    )
}