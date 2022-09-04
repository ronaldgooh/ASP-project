import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';
 
const HomeLogo = () => {
    return (
        <div>
            <h1>Messages inbox</h1>
            <div class = "message-box flex r">
                <Link to = "#">
                    <div class = "text-content flex c">
                        <b><p>User: xxx</p></b>
                        <b><p>Faulty ceiling fan</p></b>
                        <p class = "tags">Electrical</p>
                        <p class = "small">My ceiling fan changes speed automatically...</p>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default HomeLogo;