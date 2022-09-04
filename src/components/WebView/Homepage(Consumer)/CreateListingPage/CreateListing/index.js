import React from "react";
import "./index.css";

const CreateList = () => {
    return (
        <div className="CreateListingBox">
            <div className="CreateListingContainer">
            <h1><b>Create Listing</b></h1>
                <div className="CreateListingBorder" >
                        <div className="CreateListingGrid">
                            <div className="CreateListingTitle">
                                    Listing Title: <input type="text" />
                            </div>
                            <div className="CreateListingDate">
                                   Start Date: <input type="date" />   
                            </div>
                            <div className="CreateListingCategory">
                                Job Category: <input type="text" />
                            </div>
                            <div className="CreateListingPrice">   
                            Price: $ <input type="number" />
                            </div>
                            <div className="CreateListingImage">   
                                Upload Image Here: 
                                <a href="">
                                    <img src={require("../../../../images/add.png")} alt = '/' width="25px" />
                                </a>
                                <a href="">
                                    <img src={require("../../../../images/add.png")} alt = '/' width="25px" />
                                </a>
                                <a href="">
                                    <img src={require("../../../../images/add.png")} alt = '/' width="25px" />
                                </a>
                            </div>
                            <div className="CreateListingDescription">   
                            Description: <br/><input className="descriptionInput" type="text"/>
                            </div>
                            <div className="CreateListingButton">
                                <button>List it now!</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        )    
};
export default CreateList;

export const items = [
    {
        id: 1,
        image: require("../../../../images/profile.png"),
        title: "dog",
        status:" 21/05/2022",
        time: " $150 : Completed",
    },
    {
        id: 2,
        image: require("../../../../images/profile.png"),
        title: "dog",
        status:" 21/06/2022",
        time: " $250 : Completed",
    },
    {
        id: 3,
        image: require("../../../../images/profile.png"),
        title: "dog",
        status:" 23/05/2022",
        time: " $350 : Completed",
    },
]