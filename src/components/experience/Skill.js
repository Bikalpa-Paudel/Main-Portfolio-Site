import './Skill.css'

export default function Skill(){
    return(
        <>
            <div className="skill-line">
                <div className="point">
                    <div className='skill-right'>HTML / CSS / JavaScript</div>
                    <p className="edu-text-r">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dicta tenetur maxime nam quasi similique rerum optio ut voluptatem provident!</p>
                </div>

                <div className="point">
                    <div className="skill-left">React / Redux / Nodejs</div>
                    <p className="edu-text-l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dicta tenetur maxime nam quasi similique rerum optio ut voluptatem provident!</p>
                </div>
                <div className="point">
                    <div className="skill-right">Git / Github</div>
                    <p className="edu-text-r">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dicta tenetur maxime nam quasi similique rerum optio ut voluptatem provident!</p>
                </div>

            </div>
        </>
    )
}