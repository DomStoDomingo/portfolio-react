import React from "react";
import '../styles/Experience.css';

 const Experience = ({ experience }) =>{
    return(
        <div className="glass h-20 w-full flex gap-2 p-2">
            <img src={experience.image} alt={experience.name} className="exp-image rounded-lg"/>
            
        </div>
    );
 }

 export default Experience;