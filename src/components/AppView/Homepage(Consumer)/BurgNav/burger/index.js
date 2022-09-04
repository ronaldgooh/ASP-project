import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';
 
const Burger = () => {
    return (
        <div>
            <div class = "burger-container">
                <div class = "burger-links flex c mid-align" id = "burger">
                    <Link to = "/consumerHomepage/burger">
                        <div class = "burger-comp"></div>
                        <div class = "burger-comp"></div>
                        <div class = "burger-comp"></div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Burger;