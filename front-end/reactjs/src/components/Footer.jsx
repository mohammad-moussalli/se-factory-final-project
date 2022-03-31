import "../style/footer.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import Button from "./Button";
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/insta.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png'

const Footer = () => {

    let footer = 'footer';
        
    const location = useLocation();
    if (location.pathname === '/menu' || location.pathname === '/register' || location.pathname === '/login'){
        footer = 'menu-footer';
    }
    
    const instagram_link = 'https://www.instagram.com/kaffi_lb/?hl=en';
    const facebook_link = 'https://www.facebook.com/kaffi.lb/';
    const twitter_link = 'https://twitter.com/Kaffi_lb';
    const linkedin_link = 'https://www.linkedin.com/company/kaffi-lb';

    return (
        <div className={`footer ${footer}`}>
            <div className="footer1">
                    <Link to='/about-us' className="footer-text footer-aboutus">About Kaffi</Link>
                    <Link to='/team' className="footer-text footer-team">Meet the Team</Link>
                    <Link to='contact-us' className="footer-text footer-contactus">Contact Us</Link>
            </div>
            <div className="footer2">
                <div className="footer2-row1">
                    <a href={linkedin_link} target="_blank"><img className="social-media-links" src={linkedin}/></a>
                    <a href={instagram_link} target="_blank"><img className="social-media-links" src={instagram}/></a>
                    <a href={twitter_link} target="_blank"> <img className="social-media-links" src={twitter}/></a>
                    <a href={facebook_link} target="_blank">  <img className="social-media-links" src={facebook}/></a>   
                </div>

                <div className="footer2-row2">
                    <p className='footer-rights'>All Rights Preserved@kaffi 2022</p>
                </div>
           
            </div>
        </div>
    );
}  
export default Footer; 