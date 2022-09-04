import React from "react";
import "./index.css";
import Burger from "./burger";
import JobCategories from "./job-categories";
import JobListings from "./job-listings";
import Earnings from "./earnings";
import TransactionHistory from "./transactions";

const DefaultHome = () => {
    return (
        <div class = "wrapper flex c mid-align">
            <div id = "mobile" class = "flex c">
                <div class = "spacing flex c">
                    <Burger/> 
                    <JobCategories/>
                    <JobListings/>
                    <Earnings/>
                    <TransactionHistory/>
                </div>
            </div>
        </div>
    )    
};

export default DefaultHome;