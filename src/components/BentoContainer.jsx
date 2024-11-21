import React from "react";
import '../styles/BentoContainer.css';
import TopLeftContainer from "./TopLeftContainer";
import TopMiddleContainer from "./TopMiddleContainer";
import TopRightContainer from "./TopRightContainer";
import useContacts from "../hooks/useContacts";


const BentoContainer = () => {
    const contactsDetails = useContacts();
    return(
        <div className="bento-container h-auto flex flex-col gap-4">
            <div className="bento-item left h-auto w-full flex flex-row gap-4">
                <TopLeftContainer />
                <TopMiddleContainer/>
                <TopRightContainer contacts={contactsDetails}/>
            </div>
            <div className="bento-item  glass middle flex-auto h-auto w-full"></div>
            <div className="bento-item right flex-auto h-auto w-full"></div>
        </div>
    );
}


export default BentoContainer;
