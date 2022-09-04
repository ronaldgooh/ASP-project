import React from "react";
import "./index.css";
import BurgOpen from './burger-open';
import Burger from "./burger";
import BurgerOverlay from "./burger-overlay";
import JobCategories from "./job-categories";
import JobListings from "./job-listings";
import CreateListing from "./create-listing";

const BurgerOpen = () => {
    return (
        <div class = "wrapper flex c mid-align">
            <div id = "mobile" class = "flex c">
                <div class = "spacing flex c">
                    <Burger/>
                    <BurgerOverlay/>
                    <JobCategories/>
                    <JobListings/>
                    <CreateListing/>
                    <BurgOpen/>
                </div>
            </div>
        </div>
    )    
};

export default BurgerOpen;