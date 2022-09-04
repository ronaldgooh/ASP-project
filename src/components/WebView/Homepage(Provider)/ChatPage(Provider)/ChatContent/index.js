import './index.css';
import ChatProfile from '../../../../images/profile.png';


const ChatContent = () => {
    return(
        <div className='chat-box'>
            <div className='chat-container'>

                <div className='message-search-box'>
                    <input type="text" className='box' placeholder='Search...' />
                    <br />
                    <p className='inbox-text'>
                        INBOX
                    </p>
                </div>

                <div className='message-chat-id'>
                    {items.map((item) =>{ return(
                        <div className='message-box'>
                            <div className='chat-profile'>
                                <img src={item.imageFirst} alt='/' />
                            </div>

                            <div className='company-name'>
                                <p>
                                    {item.companyName}
                                </p>
                            </div>

                            <div className='job-title'>
                                <b>{item.jobTitle}</b>
                            </div>

                            <div className="description">
                            {item.description}
                            </div>

                            <div className='chat-icon'>
                                <img src={item.imageSecond} alt='/' />
                            </div>

                        </div>
                    )})}
                </div>

            </div>

            <div className='chat-container-two'>

                    <div className='chat-details'>
                        <div className='chat-detail-profile'>
                            <img src={ChatProfile} className="chatProfile" alt='chat' />
                        </div>

                        <div className='chat-detail-info'>
                            <div className='chat-company'>
                                <h1>Singapore Handyman Company</h1>
                            </div>

                            <div className='chat-info'>
                                <p>Handling doorbell problems</p>
                            </div>        
                        </div>

                        <div className='job-status'>
                            <button className='edit-btn'>Edit</button>
                            <div className='space'></div>
                            <button className='cancel-btn'>Cancel</button>
                        </div>
                    </div>

                    <div className='chat-box-container'>
                        <div className='first-user'>
                            <img src={ChatProfile} class='profile-icon' alt='chat' />
                        </div>

                        <div className='first-user-chat'>
                            <p>Hello, we will be handling your doorbell this week if you are okay with it!</p>
                        </div>

                        <div className='second-user-chat'>
                            <p>I will consider about the price and the availability!</p>
                        </div>

                        <div className='text-box'>
                            <p className='text-box-text'>Type here.......</p>
                        </div>

                    </div>


                </div>           
            

        </div>
    )
}




export default ChatContent


export const items = [
    {
        id: 1, 
        imageFirst: require("../../../../images/profile.png"),
        imageSecond: require("../../../../images/handyman.png"),
        companyName: "Singapore Handyman Company", 
        jobTitle: "FIXING DOORBELL", 
        description: "Hello, we will be fixing your doorbell...",
    },
    {
        id: 2, 
        imageFirst: require("../../../../images/profile.png"),
        imageSecond: require("../../../../images/moving.png"),
        companyName: "Lala moving company", 
        jobTitle: "ITEM DELIVERY", 
        description: "Item will be delivered during peak hour!",
    },
    {
        id: 3, 
        imageFirst: require("../../../../images/profile.png"),
        imageSecond: require("../../../../images/electrician.png"),
        companyName: "Ninja Cool Company", 
        jobTitle: "AIR-CONDITION SERVICING", 
        description: "Thank you for hiring us! We will...",
    } 
    
]

