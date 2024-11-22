import React from "react";
import '../styles/BentoContainer.css';
import TopLeftContainer from "./TopLeftContainer";
import TopMiddleContainer from "./TopMiddleContainer";
import TopRightContainer from "./TopRightContainer";
import SkillCarousel from "./SkillCarousel";
import getContacts from "../hooks/getContacts";
import getSkills from "../hooks/getSkills";


const BentoContainer = () => {
    const contactsDetails = getContacts();
    const skillsDetails = getSkills();

    return(
        <div className="bento-container h-auto flex flex-col gap-4">
            <div className="bento-item left h-auto w-full flex flex-row gap-4">
                <TopLeftContainer />
                <TopMiddleContainer/>
                <TopRightContainer contacts={contactsDetails}/>
            </div>
            <div className="bento-item  glass middle flex-auto h-auto w-full">
                <SkillCarousel skills={skillsDetails}/>
            </div>
            <div className="bento-item flex flex-auto h-full w-full gap-4">
                <div className="glass h-2/5 w-full"></div>
                <div className="glass h-2/5 w-full"></div>
            </div>
            <div className="bento-item flex-auto h-auto w-full"></div>
        </div>
    );
}


export default BentoContainer;
