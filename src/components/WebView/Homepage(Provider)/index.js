import './index.css';
import NavBar from './NavBar(provider)'
import Footer from '../../Footer';
import JobCatergories from '../CommonModules/JobCatergories';
import OngoingJob from '../CommonModules/OngoingJob';
import TransactionHistory from './TransactionHistory';
import Dashboard from './Dashboard';

const Provider = () => {
    return(
        <>
            <NavBar />
            <JobCatergories />
            <OngoingJob />
            <Dashboard />
            <TransactionHistory />
            <Footer />
        </>
    )
};



export default Provider;

















