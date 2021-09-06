import React from 'react';
import '../styles/About.css';
import { Data } from '../data/data';


const About = (props) => {
    return ( 
        <div className="about" id="about">
            <h2>About me</h2>
        <Section data={Data} />
        </div>
         
     );
}
 const Section = (props) => {
    return ( 
           <div className="aboutContent">
              <div className="about-img">
                 <img
                 src={props.data.image}
                 alt=""
                 />
              </div>
           <div className="about-text">
              <p>{props.data.paragraph}</p>
              <a href="mailto:samueladeyemi2006@gmail.com">
              <button>
                 {props.data.button}
              </button>
              </a>
           </div>
          </div>
     );
 }
  


export default About;