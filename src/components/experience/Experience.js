import Education from './Education'
import './Experience.css'
import Skill from './Skill'
import {useState} from 'react'

export default function Experience(){
    const [show, setShow] = useState(true)
    function setTrue(){
        setShow(true)
        console.log(true)
    }

    function setFalse(){
        setShow(false)
    }

    return(
        <section id="experience">
            <div className='exp-text'>The Experience I Have</div>
            <div className="two-btn">
                <div onClick={setTrue} className="one-btn skill-btn">Skills</div>
                <div onClick={setFalse} className="one-btn student-btn">Educations</div>
            </div>
            {show  ? <Skill /> : <Education /> }
        </section>
    )
}