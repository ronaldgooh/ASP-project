import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const OngoingJob = () => {
    return (
        <div className="OngoingJobBox">
            <div className="OngoingJobContainer">
                <h1><b>Ongoing Job Listings</b></h1>
               
                {items.map((item)=>{ return(
                <div className="OngoingJobRow" >
                    <Link to="/maintenance">
                        <div className="OngoingJobListing">
                            <div className="OngoingJobGridBox">
                                    <img src ={item.image} alt = '/' width="70%"  />    
                            </div>
                            <div className="OngoingJobTitle">
                                <p>
                                {item.title}
                                </p>
                            </div>
                            <div className="OngoingJobService">
                                {item.service}
                            </div>
                            <div className="OngoingJobService2">
                                {item.service2}
                            </div>
                            <div className="OngoingJobStatus">
                            Job Status: 
                            {item.status}
                            </div>
                            <div className="OngoingJobDescription">
                            Estimated Completion: {item.description}
                            </div>
                            <div className="OngoingJobTimeframe">
                                    <img src ={item.image2} alt = '/' width="20" />    
                                    {item.time}
                            </div>
                        </div>
                    </Link>
                </div>
                )})} 
            </div>
        </div>
        )    
};
export default OngoingJob;

export const items = [
    {
        id: 1,
        image: require("../../images/profile.png"),
        title: "Fixing My Doorbell",
        service:"Mechanics",
        service2:"Services",
        status:" Accepted",
        description:" 31/2/2023",
        image2: require("../../images/stopwatch.png"),
        time: " One days ago",
    },
    {
        id: 2,
        image: require("../../images/profile.png"),
        title: "Item Delivery",
        service:"Courier",
        service2:"Services",
        status:" Pending",
        description:" 12/1/2023",
        image2: require("../../images/stopwatch.png"),
        time: " Two days ago",
    },
    {
        id: 3,
        image: require("../../images/profile.png"),
        title: "Air-condition...",
        service:"Electrician",
        service2:"Mechanics",
        status:" Accepted",
        description:" 22/4/2023",
        image2: require("../../images/stopwatch.png"),
        time: " Three days ago",
    },
]