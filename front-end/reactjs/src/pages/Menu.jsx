import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
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
  return (
    <div className="menu">

        <div className="menu-button">
            <Button text="X" className="close-button" onClick={redirectToHomePage}/>
        </div>

        <div className ="menu-header">
            <div className="menu-option">
                <h4 onClick={onClick1}>The Foundation</h4>

                {showMenuElement1?  
                <>   
                    <h6 className='menu-element'>About Kaffi</h6>
                    <h6 className='menu-element'>The Team</h6>
                    <h6 className='menu-element'>Blog</h6>
                    <h6 className='menu-element'>Records & Success Stories</h6>
                </>: null
                }
            </div>

            <div className="menu-option">
                <h4 onClick={onClick2}>Apply</h4>

                {showMenuElement2?  
                <>
                    <h6 className='menu-element'>Deadlines</h6>
                    <h6 className='menu-element'>Kaffi Boost</h6>
                    <h6 className='menu-element'>Kaffi Launch</h6>
                </>: null
                }
            </div>

            <div className="menu-option">
                <h4 onClick={onClick3}>Donate</h4>

                {showMenuElement3?  
                <>
                    <h6 className='menu-element'>How To Donate</h6>
                </>: null
                }
            </div>

            <div className="menu-option">
                <h4 onClick={onClick4}>Volunteer</h4>

                {showMenuElement4?  
                <>                
                    <h6 className='menu-element'>Become A Buddy</h6>
                    <h6 className='menu-element'>Join The Team</h6>
                </>: null
                }
            </div>

            <div className="menu-option">
                <h4 onClick={onClick5}>Academic Advising</h4>

                {showMenuElement5?  
                <>                
                    <h6 className='menu-element'>Find A Buddy</h6>
                    <h6 className='menu-element'>CV Tips</h6>
                    <h6 className='menu-element'>Webinars</h6>
                </>: null
                }
            </div>
        </div>
    </div>
  )
}

export default MenuPage