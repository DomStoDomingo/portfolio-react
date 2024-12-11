import React from "react";
import '../styles/TopMiddleContainer.css';
import getDetails from "../hooks/getDetails";
import ChipList from "./ChipList";

const TopMiddleContainer = () => {
    const personalDetails = getDetails();
    return(
        <div className="flex flex-col tm-container gap-4">
            <div className="glass h-auto p-4 flex flex-col items-start justify-center">
                <h2 className="name text-3xl font-bold">
                    Curious <span className="mind">Mind</span>, Creative <span className="solutions">Solutions</span>
                </h2>
                <h6 className="role">
                    Transforming Challenges into Innovative Digital Experience   
                </h6>
            </div>
            <div className="glass h-full p-4 flex flex-col justify-between">
                <div className="h-auto">
                    <h1 className="name text-4xl font-bold">
                        DOM STO.DOMINGO
                    </h1>
                    <h6 className="role">
                        OUTSYSTEMS DEVELOPER    
                    </h6>
                </div>
                <div className="glass h-auto flex items-center">
                    <ChipList details={personalDetails}/>
                </div>
            </div>
        </div>
    );
}

export default TopMiddleContainer;