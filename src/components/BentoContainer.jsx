import React from "react";
import '../styles/BentoContainer.css';
import TopLeftContainer from "./TopLeftContainer";
import TopMiddleContainer from "./TopMiddleContainer";
import TopRightContainer from "./TopRightContainer";
import useContacts from "../hooks/useContacts";
import useDetails from "../hooks/useDetails";


const BentoContainer = () => {
    const contactsDetails = useContacts();
    const personalDetails = useDetails();
    return(
        <div className="bento-container h-auto flex flex-col gap-4">
            <div className="bento-item left h-auto w-full flex flex-row gap-4">
                <TopLeftContainer />
                <TopMiddleContainer details={personalDetails}/>
                <TopRightContainer contacts={contactsDetails}/>
            </div>
            <div className="bento-item middle flex-auto h-auto w-full"></div>
            <div className="bento-item right flex-auto h-auto w-full"></div>
        </div>
    );
}


export default BentoContainer;
