import React from "react";
import Skill from "./Skill";
import Marquee from "react-fast-marquee";

const SkillCarousel = ({ skills }) =>{
    return(
        <div className="carousel h-24 flex items-center">
            <Marquee autoFill={true} pauseOnClick={true} className="h-full">
                {skills.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
            </Marquee>
        </div>
    );
}

export default SkillCarousel;