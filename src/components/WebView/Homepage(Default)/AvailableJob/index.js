import React from "react";
import "./index.css";
import{ Link } from 'react-router-dom';
  

const AvailableJob = () => {
    return (
        <div className="AvailableJobBox">
            <div className="AvailableJobContainer">
                <b>Available Job Listings</b>
                <Link to="/login/consumer">
                {items.map((item)=>{ return(
                <div className="AvailableJobRow" >
                        <div className="AvailableJobListing">
                            <div className="AvailableJobGridBox">
                                    <img src ={item.image} alt = '/' width="60"/>    
                            </div>
                            <div className="AvailableJobTitle">
                                <p>
                                {item.title}
                                </p>
                            </div>
                            <div className="AvailableJobService">
                                {item.service}
                            </div>
                            <div className="AvailableJobDescription">
                            {item.description}
                            </div>
                        </div>
                </div>
                )})} 
                </Link>
            </div>
        </div>
        )    
};
export default AvailableJob;

export const items = [
    {
        id: 1,
        image: require("../../../images/profile.png"),
        title: "Fixing Door Bell",
        service:"Mechanics",
        description:"Need help with fixing my door bell, which was broken few .....",
    },
    {
        id: 2,
        image: require("../../../images/profile.png"),
        title: "Item Delivery",
        service:"Courier",
        description:"Item to be delivery on xx/xx. Would need a courier service to pick it up soon",
    },
    {
        id: 3,
        image: require("../../../images/profile.png"),
        title: "Air-con Servicing",
        service:"Electrician",
        description:"Air-con has been leaking water. Need help urgently... ",
    },
]