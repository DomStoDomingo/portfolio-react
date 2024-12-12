import React from "react";
import Experience from "./Experience";
import "../styles/Experiences.css";

const Experiences = ({ experiences }) => {
  return (
    <div
      className="experiences-container flex flex-col gap-2 p-2 w-full 
                 overflow-y-auto snap-y snap-mandatory scroll-smooth h-96"
    >
      {experiences.map((experience) => (
        <div key={experience.id} className="snap-start">
          <Experience experience={experience} />
        </div>
      ))}
    </div>
  );
};

export default Experiences;
