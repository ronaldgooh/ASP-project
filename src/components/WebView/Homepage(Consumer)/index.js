import './index.css';
import NavBar from '././NavBar(consumer)';
import Footer from '../../Footer';
import JobCatergories from '../CommonModules/JobCatergories';
import OngoingJob from '../CommonModules/OngoingJob';
import PostedRequest from'./PostedRequest';
const Consumer = () => {
    return(
        <>
            <NavBar />
            <JobCatergories />
            <OngoingJob />
            <PostedRequest />
            <Footer />
        </>
    )
};



export default Consumer


















