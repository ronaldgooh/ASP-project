import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Dashboard = () => {
    return (
        <div className="DashboardBox">
            <div className="DashboardContainer">
                <h1><b>Dashboard</b></h1>
                <div className="DashboardHeader">
                    <div>
                        <Link style={{textDecoration: 'none'}} to="">This month </Link>
                     | 
                        <Link style={{textDecoration: 'none'}} to=""> This Year</Link>
                    </div>
                </div>
                <div className="DashboardRow" >
                        <div className="DashboardListing">
                            <div className="DashboardGridBox">
                                Total Earnings: $______________
                            </div>
                            <div className="DashboardGridBox2">
                                _____________________________________________________________________________
                                
                            </div>
                            <div className="DashboardGridBox3">
                            1 10 15 20 25 30
                            </div>
                        </div>
                </div>
            </div>
        </div>
        )    
};
export default Dashboard;

