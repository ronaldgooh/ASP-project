import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

  

const PostedRequest = () => {
    return (
        <div className="PostedRequestBox">
            <div className="PostedRequestContainer">
                <h1><b>Your Posted Requests</b></h1>
               
                <div className="PostedRequestRow" >
                    <Link to="/consumerHomepage/createListing">
                        <div className="PostedRequestListing">
                            <div className="PostedRequestGridBox">
                                    <img src ={require("../../../images/add.png")} alt = '/' width="70%"  />    
                            </div>
                            <div className="PostedRequestTitle">
                                <p>
                                    <b>CREATE A NEW LISTING</b>
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        )    
};
export default PostedRequest;

