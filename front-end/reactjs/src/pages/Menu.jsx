import Button from '../components/Button';
import { useNavigate, Link } from 'react-router-dom';
import '../style/menu.css';

const MenuPage = () => {

    const navigate = useNavigate();
    const redirectToHomePage = () => {
        navigate('/');
    }    

    return(
    <div className="menu">

        <div className="menu-button">
            <Button text="X" className="close-button" onClick={redirectToHomePage}/>
        </div>

        <div className ="menu-header">
            <div className="menu-option foundation-menu">
                <p className='menu-option-title'>The Foundation</p>
                <div className='foundation-links'>   
                    <Link to='/about-us' className='menu-element'>About Kaffi</Link>
                    <Link to='/team' className='menu-element'>The Team</Link>
                    <Link to='/blog' className='menu-element'>Blog</Link>
                    <Link to='/records' className='menu-element'>Records & Success Stories</Link>
                </div>
            </div>

            <div className="menu-option apply-menu">
                <p className='menu-option-title'>Apply</p> 
                <div className='apply-links'>
                    <Link to='/scholarships' className='menu-element'>Deadlines</Link>
                    <Link to='/scholarships/boost' className='menu-element'>Kaffi Boost</Link>
                    <Link to='/scholarships/launch' className='menu-element'>Kaffi Launch</Link>
                </div>
            </div>

            <div className="menu-option donate-menu">
                <p className='menu-option-title'>Donate</p>  
                <div className='donate-links'>
                    <Link to='/donate' className='menu-element'>How To Donate</Link>
                </div>
            </div>

            <div className="menu-option volunteer-menu">
                <p className='menu-option-title'>Volunteer</p>
                <div className='volunteer-links'>                
                    <Link to='/applications' className='menu-element'>Become A Buddy</Link>
                    <Link to='/applications' className='menu-element'>Join The Team</Link>
                </div>
            </div>

            <div className="menu-option academic-menu">
                <p className='menu-option-title'>Advising</p>
                <div className='academic-links'>                
                    <Link to='/webinars' className='menu-element'>Webinars</Link>
                    <Link to='/buddies' className='menu-element'>Buddies</Link>
                </div>
            </div>
        </div>
    </div>
)}

export default MenuPage