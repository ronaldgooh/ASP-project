import { Link } from 'react-router-dom';
import './index.css';



const SearchContent = () => {

    return(
        <div className='SearchBox'>
            <div className='SearchContainerOne'>
                <div className='SearchFilterTitle'>
                    <h1><b>Available Job Listings</b></h1>
                </div>

                <div className='SearchFilterOne'>
                    Earliest Availability
                </div>

                <div className='SearchFilterTwo'>
                    Rating
                </div>

                <div className='SearchFilterThree'>
                    Distance Proximity
                </div>

                <div className='SearchFilterFour'>
                    Has Own Tools
                </div>

                <div className='SearchFilterFive'>
                    Has Own Transport
                </div>

            </div>

            <div className='SearchContainerTwo'>
                {objects.map((object) => { return(
                    <div className='SearchJobRow'>
                        <Link to='/maintenance'>
                            <div className='SearchJobListing'>
                                <div className='SearchJobGridBox'>
                                    <img src={object.imageOne}
                                    alt="/"
                                    width="70%" />
                                </div>

                                <div className='SearchJobTitle'>
                                    <p>
                                        {object.title}
                                    </p>
                                </div>

                                <div className='SearchJobService'>
                                    {object.service}
                                </div>

                                <div className='SearchJobService2'>
                                    {object.service2}
                                </div>

                                <div className='SearchJobStatus'>
                                    Job Status:
                                    {object.status}
                                </div>

                                <div className='SearchJobDescription'>
                                    Estimation Completion: 
                                    {object.description}
                                </div>
                                
                                <div className='SearchJobTimeFrame'>
                                    <img src={object.imageTwo}
                                    alt='/'
                                    width="20" />
                                    {object.time}
                                </div>
                            </div>
                        </Link>
                    </div>
                )})}
            </div>

        </div>

    )

}


export default SearchContent;



export const objects = [

    {
        id: 1,
        imageOne: require("../../../../../images/profile.png"),
        title: "Fixing My Doorbell",
        service: "Mechanics",
        service2: "Electrician",
        status: "Accepted",
        description: "31/02/2023",
        imageTwo: require("../../../../../images/profile.png"),
        time: "Two days ago",

    },
    {
        id: 2,
        imageOne: require("../../../../../images/profile.png"),
        title: "Item Delivery ",
        service: "Courier",
        service2: "Services",
        status: "Accepted",
        description: "31/02/2023",
        imageTwo: require("../../../../../images/profile.png"),
        time: "Two days ago",

    },
    {
        id: 3,
        imageOne: require("../../../../../images/profile.png"),
        title: "Air-condition...",
        service: "Mechanics",
        service2: "Electrician",
        status: "Accepted",
        description: "31/02/2023",
        imageTwo: require("../../../../../images/profile.png"),
        time: "Two days ago",

    },
    {
        id: 4,
        imageOne: require("../../../../../images/profile.png"),
        title: "Fixing my aircon",
        service: "Servicing",
        service2: "Mechanics",
        status: "Accepted",
        description: "31/02/2023",
        imageTwo: require("../../../../../images/profile.png"),
        time: "Two days ago",

    },
    {
        id: 5,
        imageOne: require("../../../../../images/profile.png"),
        title: "Laptop Issue",
        service: "Electrician",
        service2: "IT Expert",
        status: "Accepted",
        description: "31/02/2023",
        imageTwo: require("../../../../../images/profile.png"),
        time: "Two days ago",

    },

]
















