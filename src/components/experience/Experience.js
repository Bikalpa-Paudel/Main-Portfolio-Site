import './Experience.css'
import Skill from './Skill'

export default function Experience(){
    return(
        <section id="experience">
            <div className='exp-text'>The Experience I Have</div>
            <div className="two-btn">
                <div className="one-btn skill-btn">Skills</div>
                <div className="one-btn student-btn">Educations</div>
            </div>
            <Skill />
        </section>
    )
}