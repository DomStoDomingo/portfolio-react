import React from "react";
import image from "../assets/svg/logoWhite.svg";
import "../styles/Logo.css";

const Logo = () => {
    return(
        <div className="logo-container flex flex-col justify-center items-center p-2 gap-4">
            <img src={image} alt="logo" className="portfolio-logo"/>
        </div>
        
    );
}

export default Logo;