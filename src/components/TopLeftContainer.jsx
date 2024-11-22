import React from "react";
import Logo from "./Logo";
import "../styles/TopLeftContainer.css";

const TopLeftContainer = () =>{
    return(
        <div className="glass flex tl-container flex-auto p-4">
            <Logo />
        </div>
    );
}

export default TopLeftContainer;