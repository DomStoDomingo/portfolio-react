import React from "react";
import Logo from "./Logo";
import "../styles/TopLeftContainer.css";

const TopLeftContainer = () =>{
    return(
        <div className="glass flex tl-container flex-auto gap-4 p-4">
            <Logo />
        </div>
    );
}

export default TopLeftContainer;