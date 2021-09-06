import React from 'react';
import '../styles/project.css';
import { ProjectData } from '../data/data';

const Project = ({ProjectData}) => {
    return ( 
        <div className="project" id="project">
            <h2>Projects</h2>
         <Section />
        </div>
     );                                             
}
function Section() {
 
    return(
        <div className="projectCard">
            {ProjectData.map((ProjectsData) => 
               <div key={ProjectsData.id} className="card">
                 <div className="projectImg">
                   <img 
                   src={ProjectsData.img}
                   alt={ProjectsData.alt}
                   />
                 </div>
                 <h2>{ProjectsData.title}</h2>
                  <div className="projectButtons">
                    <a href={ProjectsData.liveLink}><button className="btn">{ProjectsData.live}</button></a> 
                    <a href={ProjectsData.githubLink}><button>{ProjectsData.github}</button></a> 
                 </div>
          </div>
            )
        }
             
        </div>
        
       

    )
}

 
export default Project;