import React from "react";
import Logo from "./Logo";
import "../styles/TopLeftContainer.css";

const TopLeftContainer = () =>{
    const origin = window.location.origin;
    return(
        <a href={origin} className="glass flex tl-container flex-auto p-4">
            <Logo />
        </a>
    );
}

export default TopLeftContainer;