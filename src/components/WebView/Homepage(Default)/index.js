import './index.css';
import NavBar from '../Homepage(Default)/NavBar(login)';
import Footer from '../../Footer';
import JobCatergories from './JobCatergories';
import AvailableJob from './AvailableJob';

const Homepage = () => {
    return(
        <>
            <NavBar />
            <JobCatergories />
            <AvailableJob />
            <Footer />
        </>
    )
};



export default Homepage




















