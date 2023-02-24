import "./About.css"
import Svg1 from "./Svg1"
import My from "./My.png"

export default function About(){
    return(
        <section id="about">
            <div className="about-container">
                <Svg1 />
                <div className="about-container-1">

                    <div className="about-text">About Me</div>
                    <div className="about-container-2">
                        <div className="profile"><img src={My} alt="my pic" className="my-photo" /></div>
                        <div className="about-info">Hi i am</div>
                    </div>
                </div>
            </div>

        </section>
    )
}