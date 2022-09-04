import React from "react";
import "./index.css";
import Logo from "./HomeLogo";
import RoleButtons from "./role-buttons";

const DefaultHome = () => {
    return (
        <div class = "wrapper flex c mid-align">
            <div id = "mobile" class = "flex c mid-align">
                <div class = "role flex c mid-align">
                    <Logo/>
                    <RoleButtons/>
                </div>
            </div>
        </div>
        )    
};


export default DefaultHome;