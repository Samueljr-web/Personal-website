import React from 'react';
import '../styles/HeroStyles.css';

const HeroSection = () => {
    return ( 
        <div className="home">
            <div className="description">
             <h2>Hello there!</h2>
                <p>
                  i'm Samuel, a front end Developer.<br />
                    from nigeria,<br /> i design websites and<br /> web apps.   
                 </p>
               <div className="buttons">
                   <button className="resumeBtn">Resume</button>
                   <button className="hireBtn" id="contact">Hire me</button>
               </div>
            </div>
        </div>
     );
}
 
export default HeroSection;