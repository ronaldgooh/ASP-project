import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';
 
const burgOpen = () => {
    return (
        <div>
            <h1 className = "job-listings-title">Job Listings</h1>
            <div class = "job-board flex c">
                <div class = "ongoing-joblist flex r">
                    <Link to = "/search/listings">
                        <div>
                            <p class = "show-board">View your existing jobs</p>
                            <div class = "arrow down" id = "arr-down"></div>
                        </div>
                    </Link>
                </div>
                <div class = "search-listings flex r">
                    <p class = "search-text">Filter search - Showing all results</p>
                    <Link to = "/search/filter">
                        <div id = "filter"></div>
                    </Link>
                </div> 
                <div class = "search-res">
                    <div class = "search-res-listings job-listings flex r">
                        <div class = "flex pic" id = "doorbell"></div>
                        <div class = "text-content flex c">
                            <b><p>Fixing my doorbell</p></b>
                            <p class = "tags">Electrical</p>
                            <p class = "small">Posted on: 18/07/22</p>
                            <p class = "small">Deadline: 21/07/22</p>
                        </div>
                        <div class = "flex c badges-container">
                            <div class = "badges flex r">
                                <div class = "badge-img" id = "gps"></div>
                                <p class = "small">10km away</p>
                            </div>
                            <div class = "badges flex r">
                                <div class = "badge-img" id = "cost"></div>
                                <p class = "small">Cheap</p>
                            </div>
                        </div>
                    </div>
                    <div class = "search-res-listings job-listings flex r" id = "last-res">
                        <div class = "flex pic" id = "doorbell"></div>
                        <div class = "text-content flex c">
                            <b><p>Faulty ceiling fan</p></b>
                            <p class = "tags">Electrical</p>
                            <p class = "small">Posted on: 19/07/22</p>
                            <p class = "small">Deadline: 22/07/22</p>
                        </div>
                        <div class = "flex c badges-container">
                            <div class = "badges flex r">
                                <div class = "badge-img" id = "gps"></div>
                                <p class = "small">12km away</p>
                            </div>
                            <div class = "badges flex r">
                                <div class = "badge-img" id = "cost"></div>
                                <p class = "small">Cheap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default burgOpen;