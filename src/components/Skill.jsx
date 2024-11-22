import React from "react";
import "../styles/Skill.css";

const CarouselItem = ({ skill }) => {
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
      <div className="glass skill-container flex justify-center item-center p-1 cursor-pointer">
        <img
          src={skill.image}
          alt={`${skill.name} logo`}
          className="skill-item w-full h-auto"
          onDragStart={preventDragHandler}
        />
      </div>
  );
}
  
export default CarouselItem;
    