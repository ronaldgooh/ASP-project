import React from "react";
import "./index.css";

const DefaultHome = () => {
    return (
        <div>
            <h1 class = "job-listing-title">Your Ongoing Job Listings</h1>
            <div class = "job-listings flex r">
                <div class = "text-content flex c">
                    <b><p class = "header-title">Fixing my doorbell</p></b>
                    <p class = "tags">Electrical</p>
                    <p class = "small">Job status: Accepted</p>
                    <p class = "small">Estimated end: 15/07/22</p>
                </div>
                <div class = "badges-container flex r">
                    <div class = "flex r badges">
                        <div class = "badge-img" id = "duration"></div>
                        <p class = "small">2 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    )    
};

export default DefaultHome;