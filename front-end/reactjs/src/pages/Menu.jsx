import Button from '../components/Button';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import '../style/menu.css';

const MenuPage = () => {

    //const [showNavbar, setShowNavbar] = useState(false)
    //const onClick = () => setShowNavbar(!showNavbar)

    const navigate = useNavigate();
    const redirectToHomePage = () => {
        navigate('/');

    }

    const [showMenuElement1, setShowMenuElement1] = useState(false)
    const onClick1 = () => {
        setShowMenuElement1(!showMenuElement1)
        setShowMenuElement2(false)
        setShowMenuElement3(false)
        setShowMenuElement4(false)
        setShowMenuElement5(false)

    }
    const [showMenuElement2, setShowMenuElement2] = useState(false)
    const onClick2 = () => {
        setShowMenuElement2(!showMenuElement2)
        setShowMenuElement1(false)
        setShowMenuElement3(false)
        setShowMenuElement4(false)
        setShowMenuElement5(false)
    }

    const [showMenuElement3, setShowMenuElement3] = useState(false)
    const onClick3 = () => {
        setShowMenuElement3(!showMenuElement3)
        setShowMenuElement2(false)
        setShowMenuElement1(false)
        setShowMenuElement4(false)
        setShowMenuElement5(false)
    }

    const [showMenuElement4, setShowMenuElement4] = useState(false)
    const onClick4 = () => {
        setShowMenuElement4(!showMenuElement4)
        setShowMenuElement2(false)
        setShowMenuElement3(false)
        setShowMenuElement1(false)
        setShowMenuElement5(false)
    }

    const [showMenuElement5, setShowMenuElement5] = useState(false)
    const onClick5 = () => {
        setShowMenuElement5(!showMenuElement5)
        setShowMenuElement2(false)
        setShowMenuElement3(false)
        setShowMenuElement4(false)
        setShowMenuElement1(false)
    }
return(
    <div className="menu">

        <div className="menu-button">
            <Button text="X" className="close-button" onClick={redirectToHomePage}/>
        </div>

        <div className ="menu-header">
            <div className="menu-option">
                <h4 onClick={onClick1}>The Foundation</h4>

                {showMenuElement1?  
                <>   
                    <Link to='/about-us' className='menu-element'>About Kaffi</Link>
                    <Link to='/team' className='menu-element'>The Team</Link>
                    <Link to='/blog' className='menu-element'>Blog</Link>
                    <Link to='/records' className='menu-element'>Records & Success Stories</Link>
                </>: null
                }
            </div>

            <div className="menu-option">
                <h4 onClick={onClick2}>Apply</h4>

                {showMenuElement2?  
                <>
                    <Link to='/scholarships' className='menu-element'>Deadlines</Link>
                    <Link to='/scholarship/boost' className='menu-element'>Kaffi Boost</Link>
                    <Link to='/scholarship/launch' className='menu-element'>Kaffi Launch</Link>
                </>: null
                }
            </div>

            <div className="menu-option">
                <h4 onClick={onClick3}>Donate</h4>

                {showMenuElement3?  
                <>
                    <Link to='/donate' className='menu-element'>How To Donate</Link>
                </>: null
                }
            </div>

            <div className="menu-option">
                <h4 onClick={onClick4}>Volunteer</h4>

                {showMenuElement4?  
                <>                
                    <Link to='/buddy/apply' className='menu-element'>Become A Buddy</Link>
                    <Link to='/team/apply' className='menu-element'>Join The Team</Link>
                </>: null
                }
            </div>

            <div className="menu-option">
                <h4 onClick={onClick5}>Academic Advising</h4>

                {showMenuElement5?  
                <>                
                    <Link to='/buddy/find' className='menu-element'>Find A Buddy</Link>
                    <Link to='/cv' className='menu-element'>CV Tips</Link>
                    <Link to='/webinars' className='menu-element'>Webinars</Link>
                </>: null
                }
            </div>
        </div>
    </div>
)}

export default MenuPage