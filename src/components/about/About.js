import "./About.css"
import AboutCard from "./AboutCard"
import {FaReact, FaGraduationCap, FaLaptop} from 'react-icons/fa';
import Svg1 from "./Svg1";

export default function About(){
    return(
        <section id="about">
            <div className="about-container">
                <h1 className="about-text">Know More About Me</h1>
                <div className="svg-container">
                    <div className="svg-container-2">   
                        <Svg1 />
                        <div className="about-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus in voluptas dolor debitis voluptate, sunt sequi adipisci vel cumque eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque accusantium aut voluptatem deserunt expedita facere sapiente laborum at. Sit aut odit temporibus molestiae obcaecati, ipsum autem quaerat perferendis quos.</div>
                    </div>
                </div>
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