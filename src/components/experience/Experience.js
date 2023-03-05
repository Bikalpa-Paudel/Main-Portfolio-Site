import './Experience.css'

export default function Experience(){
    return(
        <section id="experience">
            <div className='exp-text'>The Experience I Have</div>
            <div className="two-btn">
                <div className="one-btn skill-btn">Skills</div>
                <div className="one-btn student-btn">Educations</div>
            </div>
            <div className="skill-line">
                <div className="point">
                    <div className='skill-right'>HTML / CSS</div>
                </div>
                <div className="point">
                    <div className="skill-left">JavaScript</div>
                </div>
                <div className="point">
                    <div className="skill-right">React / Redux</div>
                </div>
                <div className="point">
                    <div className="skill-left">NodeJs</div>
                </div>
                <div className="point">
                    <div className="skill-right">Git / Github</div>
                </div>

            </div>
        </section>
    )
}