import React from "react";
import "./index.css";
import Filter from "./filter-form";

const DefaultHome = () => {
    return (
        <div class = "wrapper flex c mid-align">
            <div id = "mobile" class = "flex c">
                <div class = "spacing flex c">
                    <Filter/>
                </div>
            </div>
        </div>
    )    
};

export default DefaultHome;