import React from "react";
import "../styles/Experience.css";

const Experience = ({ experience }) => {
    return(
        <a 
        href={experience.link}
        target="_blank"
        className="glass w-full flex gap-2 p-2"
        rel="noreferrer"
        >
            <div>
                <img src={experience.image} alt={experience.name} className="exp-image"/>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold">{experience.role}</h3>
                    <span className="text-xs" >{experience.time}</span>
                </div>
                <span className="text-xs">{experience.name}</span>
            </div>
        </a>
    );
}

export default Experience;