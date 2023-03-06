import Education from './Education'
import './Experience.css'
import Skill from './Skill'
import {useState} from 'react'

export default function Experience(){
    const [show, setShow] = useState(true);
   const btnStyle= {
        'backgroundColor' : '#222222',
        'color' : '#FFFFFF'
    }
   const btnStyle1= {
        'backgroundColor' : '#FFFFFF',
        'color' : '#222222'
    }
    function setTrue(){
        setShow(true)
    }

    function setFalse(){
        setShow(false)
    }

    return(
        <section id="experience">
            <div className='exp-text'>The Experience I Have</div>
            <div className="two-btn">
                <div onClick={setTrue} className="one-btn skill-btn" style={show ? {...btnStyle} :{...btnStyle1} }>Skills</div>
                <div onClick={setFalse} className="one-btn student-btn" style={show ? {...btnStyle1} : {...btnStyle}}>Educations</div>
            </div>
            {show  ? <Skill/> : <Education /> }
        </section>
    )
}