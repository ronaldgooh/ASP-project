import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const TransactionHistory = () => {
    return (
        <div className="TransactionHistoryBox">
            <div className="TransactionHistoryContainer">
                <h1><b>Transaction History</b></h1>
               
                {items.map((item)=>{ return(
                <div className="TransactionHistoryRow" >
                    <Link to="/maintenance">
                        <div className="TransactionHistoryListing">
                            <div className="TransactionHistoryGridBox">
                                    <img src ={item.image} alt = '/' width="70%"  />    
                            </div>
                            <div className="TransactionHistoryTitle">
                                <p>
                                {item.title}
                                </p>
                            </div>
                          
                            <div className="TransactionHistoryStatus">
                            Completion Date:
                            {item.status}
                            </div>
                            <div className="TransactionHistoryTimeframe">   
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
export default TransactionHistory;

export const items = [
    {
        id: 1,
        image: require("../../../images/profile.png"),
        title: "Air-condition servicing",
        status:" 21/05/2022",
        time: " $150 : Completed",
    },
    {
        id: 2,
        image: require("../../../images/profile.png"),
        title: "Item Delivery",
        status:" 21/06/2022",
        time: " $250 : Completed",
    },
    {
        id: 3,
        image: require("../../../images/profile.png"),
        title: "Fixing door",
        status:" 23/05/2022",
        time: " $350 : Completed",
    },
]