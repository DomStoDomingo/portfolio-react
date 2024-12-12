import React from "react";
import "../styles/BentoContainer.css";
import TopLeftContainer from "./TopLeftContainer";
import TopMiddleContainer from "./TopMiddleContainer";
import TopRightContainer from "./TopRightContainer";
import Experiences from "./Experiences";
import SkillCarousel from "./SkillCarousel";
import getContacts from "../hooks/getContacts";
import getSkills from "../hooks/getSkills";
import getExperiences from "../hooks/getExperiences.js";

const BentoContainer = () => {
  const contactsDetails = getContacts();
  const skillsDetails = getSkills();
  const experiencesDetails = getExperiences();

  return (
    <div className="bento-container h-auto flex flex-col gap-4">
      <div className="bento-item left h-auto w-full flex flex-row gap-4">
        <TopLeftContainer />
        <TopMiddleContainer />
        <TopRightContainer contacts={contactsDetails} />
      </div>
      <div className="bento-item glass middle flex-auto h-auto w-full">
        <SkillCarousel skills={skillsDetails} />
      </div>
      <div className="bento-item flex w-full gap-4">
        <div className="glass w-1/2">
          <Experiences experiences={experiencesDetails} />
        </div>
        <div className="glass w-1/2 h-96"></div>
      </div>
      <div className="bento-item flex-auto h-auto w-full"></div>
    </div>
  );
};

export default BentoContainer;
