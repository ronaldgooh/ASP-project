import './index.css';
import img from '../images/payment1.png'


const Footer = () => (
    <div className='footer-box'>
        <div className='footer-container'>
            <div className='footer-row'>
                <div className='footer-column'>
                    <div className='heading'>Customer Service</div>
                    <div className="footer-item">
                        <a href="/maintenance" >Help Centre</a>
                    </div>
                    <div className="footer-item">
                        <a href="/maintenance" >How To Buy</a>
                    </div>
                    <div className="footer-item">
                        <a href="/maintenance" >How To Sell</a>
                    </div>
                    <div className="footer-item">
                        <a href="/maintenance" >Payment Method</a>
                    </div>
                    <div className="footer-item">
                        <a href="/maintenance" >Contact Us</a>
                    </div>
                </div>
                <div className='footer-column'>
                    <div className='heading'>About Company</div>
                    <div className="footer-item">
                        <a href="/maintenance" >About Us</a>
                    </div>
                    <div className="footer-item">
                        <a href="/maintenance" >Company's Careers</a>
                    </div>
                    <div className="footer-item">
                        <a href="/maintenance" >Privacy Policy</a>
                    </div>
                    <div className="footer-item">
                        <a href="/maintenance" >Media Contact</a>
                    </div>
                </div>
                <div className='footer-column'>
                    <div className='heading'>Payment</div>
                    <img src={img} alt='Payment Options' />
                </div>
                <div className='footer-column'>
                    <div className='heading'>Social Media</div>
                    <div className='footer-item'>
                        <a href="/maintenance">
                            <i className=" fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </a>
                    </div>
                    <div className="footer-item">
                        <a href="/maintenance">
                            <i className=" fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </a>
                    </div>
                    <div className="footer-item">
                        <a href="/maintenance">
                            <i className=" fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </a>
                    </div>
                    <div className="footer-item">
                        <a href="/maintenance">
                            <i className=" fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    YouTube
                                </span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

)


export default Footer;
