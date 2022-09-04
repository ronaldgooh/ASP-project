import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';
 
const CreateListing = () => {
    return (
        <div class = "create-listing spacing flex c">
            <div class = "flex">
                <Link to = "/consumerHomepage">
                    <div class = "close" id = "close-button"></div>
                </Link>
            </div>
            <h1 className = "create-job-listing-title">Create a new job listing</h1>
            <form action = "#" class = "create-listing-form">
                <div class = "form-control dropdowns flex c">
                    <label for = "job-start" id = "job-start-date" class = "dropdown-labels">Job start date: </label>
                    <input type = "date" id = "job-start"/>
                </div>
                <div class = "form-control dropdowns flex c">
                    <label for = "job-deadline" class = "dropdown-labels">Job deadline: </label>
                    <input type = "date" id = "job-deadline"/>
                </div>
                <div class = "form-control dropdowns flex c">
                    <label for = "job-category" class = "dropdown-labels">Job category: </label>
                    <select id = "job-category">
                        <option selected = "" hidden></option>
                        <option>Cleaning</option>
                        <option>Moving</option>
                        <option>Handyman</option>
                        <option>Electrical</option>
                        <option>Locksmith</option>
                        <option>Plumbing</option>
                        <option>Washing</option>
                        <option>Courier</option>
                    </select>
                </div>
                <div class = "form-control dropdowns flex c">
                    <label for = "job-pay" class = "dropdown-labels">Job payout: </label>
                    <input type = "value" id = "job-pay" value = "$" placeholder = "Input an amount here"/>
                </div>
                <div class = "form-control dropdowns flex c">
                    <label for = "addi-text" class = "dropdown-labels">Additional details: </label>
                    <textarea id = "addi-text" placeholder = "Add additional details here" rows = "5" cols = "50"></textarea>
                </div>
                <div class = "form-control inputs flex">
                    <label for = "tools" class = "checkbox-labels">Tools provided: </label>
                    <input class = "form-checkbox" type = "checkbox" id = "tools"/>
                </div>
                <div class = "form-control inputs flex">
                    <label for = "transport" class = "checkbox-labels">Transport provided: </label>
                    <input class = "form-checkbox" type = "checkbox" id = "transport"/>
                </div>
                <input type = "submit" value = "Post listing" id = "post-listing"/>
            </form>
        </div>
    )
};

export default CreateListing;