import './index.css';
import Logo from '../../../images/logo.png';
import ChatLogo from '../../../images/chat.png';
import { Link } from 'react-router-dom';
 

const NavBar = () => (
    
    <div>
        <div className='nav-bar-box'>
            <div className='nav-bar-container'>
                <div className='nav-bar-grid'><Link to='/consumerHomepage'>Home</Link></div>
                <div className='nav-bar-grid'><Link to='/maintenance'>Contact Us</Link></div>
                <div className='nav-bar-grid'><Link to='/maintenance'>Follow Us</Link></div>
            </div>

            <div className='nav-bar-container' />

            <div className='nav-bar-container-two'>
                <div className='nav-bar-grid'><Link to='/maintenance'>Notification</Link></div>
                <div className='nav-bar-grid'><Link to='/maintenance'>Help</Link></div>
                <div className='nav-bar-grid'><Link to='/maintenance'>English</Link></div>
                <div className='nav-bar-grid'><Link to='/'>Log Out</Link></div>
            </div>

        </div>

        <div className='nav-bar-box-two'>
            <div className='nav-bar-container-three'>
                <Link className='logo' to='/consumerHomepage'>
                    <img src={Logo} alt='logo' />
                </Link>
            </div>

            <div className='nav-bar-container-fourth'>
                <form className='search-bar' action='/searchConsumer' >
                    <input type='text' placeholder="Search..." className="search" />
                    <button type='submit' className='search-btn'><i class="fa fa-search"></i></button>    
                </form>  
            </div>

            <div className='nav-bar-conatiner-fifth'>
                <Link className='logo-two' to="/chatpageConsumer">
                    <img src={ChatLogo} className="imgTwo" alt='chat' />
                </Link>
            </div>

        </div>
    </div>

)

export default NavBar;


