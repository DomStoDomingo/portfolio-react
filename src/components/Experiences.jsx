import React from "react";
import Experience from "./Experience";
import '../styles/Experiences.css';

const Experiences = ({ experiences }) => {
    return(
        <div className="experiences-container flex flex-col gap-2 p-2 glass w-full">
            {experiences.map((experience) => (
                <Experience key={experience.id} experience={experience}/>
            ))}
        </div>
    );
}

export default Experiences;