import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';
 
const CreateListing = () => {
    return (
        <div>
            <h1>Your Posted Requests</h1>
            <div class = "posted-requests flex">
                <Link to = "#">
                    <div class = "flex request-content-container">
                        <div class = "add"></div>
                        <p>Post a new request</p>
                    </div>
                </Link>
            </div>
            <div class = "create-listing spacing flex c">
                <div class = "flex">
                    <div class = "close" id = "close-button">
                        <Link to = "#"></Link>
                    </div>
                </div>
                <h1>Create a new job listing</h1>
                <form action = "#">
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
                        <label for = "tools" class = "dropdown-labels">Tools provided: </label>
                        <input class = "form-checkbox" type = "checkbox" id = "tools"/>
                    </div>
                    <div class = "form-control inputs flex">
                        <label for = "transport" class = "dropdown-labels">Transport provided: </label>
                        <input class = "form-checkbox" type = "checkbox" id = "transport"/>
                    </div>
                    <input type = "submit" value = "Post listing" id = "post-listing"/>
                </form>
            </div>
        </div>
    )
};

export default CreateListing;