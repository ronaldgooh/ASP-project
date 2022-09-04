import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const RoleButtons = () => {
    return (

<div className="role-buttons-container">
    <div className="role-buttons-box">
        <Link to = "/login/consumer" class = "box">Consumer</Link>
    </div>
    <div className="role-buttons-box">
        <Link to = "/login/provider" class = "box">Service Provider</Link>
    </div>
</div>
        )
    };

export default RoleButtons;