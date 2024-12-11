import React from "react";
import "../styles/TopRightContainer.css";
import Contact from "./Contact";
import cvFile from "../assets/files/DomSto.DomingoCV.pdf";
import cvImage from "../assets/images/CV.png"


const TopRightContainer = ({ contacts }) => {
    return(
        <div className="tl-container flex flex-col gap-4 flex-auto">
            <div className="contacts-container flex justify-center items-center flex-wrap position-relative gap-4">
                {contacts.map((contact, index) => (
                        <Contact key={index} contact={contact}/>
                    ))}
            </div>
            <a
                href={cvFile} // Use the imported PDF file as the href
                download="DomSto.DomingoCV.pdf" // Set the filename for download
                className="cv-container flex-col glass flex justify-center items-center p-2"
            >
                <img src={cvImage} alt="cv-image" className="cv-img"/>
                <span>Download</span>
            </a>
        </div>
    );
}

export default TopRightContainer;