import React from "react";
import "./index.css";
import Burger from "./burger";
import OngoingJoblist from "./ongoing-joblist";

const DefaultHome = () => {
    return (
        <div class = "wrapper flex c mid-align">
            <div id = "mobile" class = "flex c">
                <div class = "spacing flex c">
                    <Burger/>
                    <OngoingJoblist/>
                </div>
            </div>
        </div>
    )    
};

export default DefaultHome;