import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';
 
const CreateListing = () => {
    return (
        <div>
            <h1 className = "requests-title">Your Posted Requests</h1>
            <div class = "posted-requests flex">
                <Link to = "#">
                    <div class = "flex request-content-container">
                        <div class = "add"></div>
                        <p>Post a new request</p>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default CreateListing;