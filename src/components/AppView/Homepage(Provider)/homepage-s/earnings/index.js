import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';
 
const Earnings = () => {
    return (
        <div class = "flex c">
            <h1 class = "earnings-title">Your Earnings</h1>
            <div id = "earnings" class = "flex c">
                <div class = "options-container flex r">
                    <div class = "options" id = "option-1-alt">
                        <Link to = "/providerHomepage">Monthly</Link>
                    </div>
                    <p class = "line-div">|</p>
                    <div class = "options">
                        <Link to = "/providerHomepage/alt">Yearly</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Earnings;