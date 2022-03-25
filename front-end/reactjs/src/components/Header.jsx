import "../style/header.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useLocation, useNavigate } from 'react-router-dom';


const Header = () => {

    let navbar = 'navbar';
    let kaffi_logo = 'kaffi-logo';
    let links = 'links';
    let about_kaffi = 'about-kaffi';
    let navbar_button = 'navbar-button';
    let menu_logo = 'menu-logo';

    const location = useLocation();
    if (location.pathname === '/menu'){
        navbar = 'menu-navbar';
    }else if (location.pathname ==='/' || location.pathname === '/register' || location.pathname === '/login'){
        navbar = 'home-navbar';
        kaffi_logo = 'home-kaffi-logo';
        links = 'home-kaffi-links';
        about_kaffi = 'home-about-kaffi';
        navbar_button = 'home-navbar-button';
        menu_logo = 'home-menu-logo';
    }

    const navigate = useNavigate()
    const redirect= () => {
    navigate('/');
    }

    const redirectToRegister= () => {
        navigate('/register');
    }



    return (
        
        <>
        <div className={`navbar ${navbar}`}>
            <i className={`kaffi-logo ${kaffi_logo}`} onClick={redirect}/>
            <div className={`links ${links}`}>
                <Link to='/about-us' className={`about-kaffi ${about_kaffi}`}>About Kaffi</Link>
                <Button className ={`navbar-button ${navbar_button}`} text="Sign Up" onClick={redirectToRegister}/>
                <Link to='/menu' className={`menu-logo ${menu_logo}`}/>
            </div>
        </div>
        </>
    );
}  
export default Header; 