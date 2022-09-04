import React from "react";
import "./index.css";
import Logo from '../../../../images/logo.png';
import { Link } from 'react-router-dom';
 
const HomeLogo = () => {
    return (
        <div class = "flex c mid-align">
             <Link to='/'>
                    <img src={Logo} alt='logo' width="300" />
            </Link>
            <h1 className = "role-selection-h1">Are you looking for or offering services?</h1>
            <p class = "role-selection-p">You can always change this setting later on.</p>
        </div>
    )
};

export default HomeLogo;