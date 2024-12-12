import React from "react";
import Experience from "./Experience";
import "../styles/Experiences.css";

const Experiences = ({ experiences }) => {
  return(
    <div className="flex flex-col gap-2">
      {experiences.map((experience) => (
          <Experience key={experience.id} experience={experience}/>
      ))}
    </div>
  );
}

export default Experiences;