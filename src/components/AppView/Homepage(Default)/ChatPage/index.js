import React from "react";
import "./index.css";
import ChatPage from "./chat";

const ChatPageMobileProvider = () => {
    return (
        <div class = "wrapper flex c mid-align">
            <div id = "mobile" class = "flex c">
                <div class = "spacing flex c">
                    <ChatPage/>
                </div>
            </div>
        </div>
    )    
};

export default ChatPageMobileProvider;