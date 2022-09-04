import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';

const DefaultHome = () => {
    return (
        <div>
            <h1 className = "job-categories-title">Job Categories</h1>
            <div>
                <div class = "job-group flex c">
                    <div class = "flex r">
                        <div class = "job-group-icon flex c mid-align">
                            <Link to = "#">
                                <div class = "icon" id = "cleaning"></div>
                                <p class = "job-group-label">Cleaning</p>
                            </Link>
                        </div>
                        <div class = "job-group-icon flex c mid-align">
                            <Link to = "#">
                                <div class = "icon" id = "moving"></div>
                                <p class = "job-group-label">Moving</p>
                            </Link>
                        </div>
                        <div class = "job-group-icon flex c mid-align">
                            <Link to = "#">
                                <div class = "icon" id = "handyman"></div>
                                <p class = "job-group-label">Handyman</p>
                            </Link>
                        </div>
                        <div class = "job-group-icon flex c mid-align">
                            <Link to = "#">
                                <div class = "icon" id = "electrical"></div>
                                <p class = "job-group-label">Electrical</p>
                            </Link>
                        </div>
                    </div>
                    <div class = "flex r" id = "bottom-row">
                        <div class = "job-group-icon flex c mid-align">
                            <Link to = "#">
                                <div class = "icon" id = "locksmith"></div>
                                <p class = "job-group-label">Locksmith</p>
                            </Link>
                        </div>
                        <div class = "job-group-icon flex c mid-align">
                            <Link to = "#">
                                <div class = "icon" id = "plumbing"></div>
                                <p class = "job-group-label">Plumbing</p>
                            </Link>
                        </div>
                        <div class = "job-group-icon flex c mid-align">
                            <Link to = "#">
                                <div class = "icon" id = "washing"></div>
                                <p class = "job-group-label">Washing</p>
                            </Link>
                        </div>
                        <div class = "job-group-icon flex c mid-align">
                            <Link to = "#">
                                <div class = "icon" id = "courier"></div>
                                <p class = "job-group-label">Courier</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
};

export default DefaultHome;