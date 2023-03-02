import "./About.css"
import Svg1 from "./Svg1"
import My from "./My.png"
import {FaReact, FaGraduationCap, FaLaptop} from "react-icons/fa"

export default function About(){
    return(
        <section id="about">
            <div className="about-container">
                <Svg1 />
                <div className="about-container-1">

                    <div className="about-text">About Me</div>
                    <div className="profile"><img src={My} alt="my pic" className="my-photo" /></div>
                    <div className="about-container-2">
                        <div className="about-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum tempora corrupti Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa, blanditiis quisquam delectus magni amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident libero eius eum.
                        </div>
                    </div>
                </div>
                <div className="about-work">
                    <div className="line"></div>
                    <div className="about-work1 frontend-work">
                        <div className="work-icon"><FaReact className="work-icon1"/></div>
                        <div className="work-text">Frontend</div>
                    </div>
                    <div className="about-work1 student-work">
                        <div className="work-icon"><FaGraduationCap className="work-icon1"/></div>
                        <div className="work-text">Student</div>
                    </div>
                    <div className="about-work1 tech-work">
                        <div className="work-icon"><FaLaptop className="work-icon1"/></div>
                        <div className="work-text">Tech Geek</div>
                    </div>
                    <div className="line"></div>
                </div>
                

            </div>

        </section>
    )
}