import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';
 
const Burger = () => {
    return (
        <div class = "search-filter flex c">
            <div class = "flex">
                <Link to = "/search">
                    <div class = "close"></div>
                </Link>
            </div>
            <h1 class = "filter-title">Filter search results</h1>
            <form action = "/search" id = "filter-form">
                <div class = "form-control dropdowns flex c">
                    <label for = "post-timespan" class = "filter-labels">Posted within number of days:</label>
                    <div class = "flex r slider-container">
                        <input type = "range" min = "-4" max = "0" value = "-2" id = "post-timespan" class = "slider"/>
                        <p class = "min-range">3 days ago</p>
                        <p class = "max-range">Today</p>
                    </div>
                </div>
                <div class = "form-control dropdowns flex c">
                    <label for = "distance-away" class = "filter-labels">Distance away: </label>
                    <div class = "flex r slider-container">
                        <input type = "range" min = "1" max = "10" value = "5" id = "distance-away" class = "slider"/>
                        <p class = "min-range">1km</p>
                        <p class = "max-range">10km</p>
                    </div>
                </div>
                <div class = "form-control dropdowns flex c">
                    <label for = "price-range" class = "filter-labels">Job price range: </label>
                    <div class = "flex r slider-container">
                        <input type = "range" min = "50" max = "1000" value = "475" id = "price-range" class = "slider"/>
                        <p class = "min-range">$50</p>
                        <p class = "max-range">$1000</p>
                    </div>
                </div>
                <div class = "form-control inputs flex" id = "tools-group">
                    <label for = "tools" class = "filter-checkbox-labels">Tools provided: </label>
                    <input type = "checkbox" id = "tools"/>
                </div>
                <div class = "form-control inputs flex">
                    <label for = "transport" class = "filter-checkbox-labels">Transport provided: </label>
                    <input type = "checkbox" id = "transport"/>
                </div>
                <input type = "submit" value = "Filter results" id = "filter-submit"/>
            </form>
        </div>
    )
};

export default Burger;