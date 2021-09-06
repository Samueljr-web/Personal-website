import React from 'react';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiJquery } from 'react-icons/si'
import { SkillsData } from '../data/data';
import '../styles/skills.css';
const Skills = (props) => {
    return (  
        <div className="skills" id="skills">
            <h2>Technologies</h2>
            <Section data={SkillsData} />
        </div>
    );
}
 
const Section = (props) => {
    return ( 
        <div className="skill">
           <h4>{props.data.title}&raquo;</h4>
           <div className="skills-box">
            <div >
               <div className="box">
                <i><FaHtml5 /></i>
                <h3>Html5</h3>
               </div> 
            </div>
            
            <div className="box">
                <i><FaCss3Alt /></i>
                <h3>css3</h3>
            </div>
            <div className="box">
                <i><FaBootstrap /></i>
                <h3>Bootstrap</h3>
            </div>
            <div className="box">
                <i><FaJs /></i>
                <h3>Javascript</h3>
            </div>
            <div className="box">
                <i><SiJquery /></i>
                <h3>Jquery</h3>
            </div>
            <div className="box">
                <i><FaReact /></i>
                <h3>Reactjs</h3>
            </div>
           <div>
        </div>
 </div>
        </div>
     );
}
 

export default Skills;