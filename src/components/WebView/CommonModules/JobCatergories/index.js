import { Link } from 'react-router-dom';
import './index.css';


const JobCatergories = () => {

    return(
        <div className='job-categories-box'>
            <div className='job-categories-container'>
                <h1><b>Job Categories</b></h1>
                <div className='job-categories-row'>
                    {items.map((item) =>{ return(
                        <div className='job-categories-icon'>
                            <Link to="/maintenance">
                                <img src={item.image} alt = '/' width="100"/>
                            </Link>
                            <text>{item.text}</text>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default JobCatergories;

export const items = [
    {
        id: 1, 
        image: require("../../images/aircon.png"),
        text: "Aircon Repairs"
    },
    {
        id: 2, 
        image: require("../../images/disinfect.png"),
        text: "Disinfection"
    },
    {
        id: 3, 
        image: require("../../images/plumber.png"),
        text: "Plumber"
    },
    {
        id: 4, 
        image: require("../../images/electrician.png"),
        text: "Electrician"
    },
    {
        id: 5, 
        image: require("../../images/pest control.png"),
        text: "Pest Control"
    },
    {
        id: 6, 
        image: require("../../images/handyman.png"),
        text: "HandyMan"
    },
    {
        id: 7, 
        image: require("../../images/locksmith.png"),
        text: "Lock Smith"
    }

]
