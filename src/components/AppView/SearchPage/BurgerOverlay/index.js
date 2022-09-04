import React from "react";
import "./index.css";
import BurgerMenu from "./burger-open";
import BurgerOverlay from "./burger-overlay";
import OngoingJoblist from "./ongoing-joblist";

const DefaultHome = () => {
    return (
        <div class = "wrapper flex c mid-align">
            <div id = "mobile" class = "flex c">
                <div class = "spacing flex c">
                    <BurgerMenu/>
                    <BurgerOverlay/>
                    <OngoingJoblist/>
                </div>
            </div>
        </div>
    )    
};

export default DefaultHome;