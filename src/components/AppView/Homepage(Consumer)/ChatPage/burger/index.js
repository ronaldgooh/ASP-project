import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';
 
const HomeLogo = () => {
    return (
        <div>
            <div class = "burger-menu flex c">
                <div class = "flex">
                    <div class = "close">
                        <Link to = "#"></Link>
                    </div>
                </div>
                <hr class = "solid flex"/>
                <div class = "profile"></div>
                <div class = "account-group">
                    <h1 className = "title">My Account</h1>
                    <div class = "burger-links">
                        <Link to = "/homepage-c">Home</Link>
                    </div>
                    <div class = "burger-links">
                        <Link to = "#">Saved Places</Link>
                    </div>
                    <div class = "burger-links">
                        <Link to = "inbox.html">Message Inbox</Link>
                    </div>
                    <div class = "burger-links">
                        <Link to = "#">Billing Information</Link>
                    </div>
                </div>
                <hr class = "solid flex"/>
                <div class = "general">
                    <h1 className = "title">General</h1>
                    <div class = "burger-links">
                        <Link to = "#">Settings</Link>
                    </div>
                    <div class = "burger-links">
                        <Link to = "#">Contact Us</Link>
                    </div>
                </div>
                <hr class = "solid flex"/>
                <div class = "extras">
                    <h1 className = "title">For More Value</h1>
                    <div class = "burger-links">
                        <Link to = "#">Refer-A-Friend</Link>
                    </div>
                </div>
            </div>
            <div class = "overlay"></div>
            <div class = "burger-container">
                <div class = "burger-links flex c mid-align" id = "burger">
                    <Link to = "#">
                        <div class = "burger-comp"></div>
                        <div class = "burger-comp"></div>
                        <div class = "burger-comp"></div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default HomeLogo;