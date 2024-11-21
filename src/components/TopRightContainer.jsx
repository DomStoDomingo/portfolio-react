import React from "react";
import "../styles/TopRightContainer.css";
import Contact from "./Contact";

const TopRightContainer = ({ contacts }) => {
    return(
        <div className="tl-container flex flex-col gap-4 flex-auto">
            <div className="contacts-container flex justify-center items-center flex-wrap position-relative gap-4">
                {contacts.map((contact, index) => (
                        <Contact key={index} contact={contact}/>
                    ))}
            </div>
            <div className="cv-container glass flex justify-center items-center p-2">
                
            </div>
        </div>
    );
}

export default TopRightContainer;