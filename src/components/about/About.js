import "./About.css"
import AboutCard from "./AboutCard"
import {FaReact, FaGraduationCap, FaLaptop} from 'react-icons/fa';


export default function About(){
    return(
        <section id="about">
            <div className="about-container">
                <h1 className="about-text">Know More About Me</h1>
                <div className='about-card-container'>
                    <AboutCard 
                    title='Frontend Developer' icon={<FaReact />}
                    info='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio vero atque temporibus ratione aspernatur officiis doloribus libero iusto. Molestiae, vel?'/>
                    <AboutCard 
                    title='University Student' icon={<FaGraduationCap/>}
                    info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed exercitationem pariatur, magni quasi consequatur eligendi ut et debitis? Quod?'/>
                    <AboutCard 
                    title='Self Learner' icon={<FaLaptop/>}
                    info='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum incidunt dignissimos animi beatae possimus corporis non dolor nemo quasi doloremque?'/>
                </div>
            </div>
        </section>
    )
}