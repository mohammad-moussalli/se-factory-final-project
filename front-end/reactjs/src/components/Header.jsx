import "../style/header.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';



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
    }else if (location.pathname ==='/'){
        navbar = 'home-navbar';
        kaffi_logo = 'home-kaffi-logo';
        links = 'home-kaffi-links';
        about_kaffi = 'home-about-kaffi';
        navbar_button = 'home-navbar-button';
        menu_logo = 'home-menu-logo';
    }

    return (
        
        <>
        <div className={`navbar ${navbar}`}>
            <i className={`kaffi-logo ${kaffi_logo}`}/>
            <div className={`links ${links}`}>
                <Link to='/about-us' className={`about-kaffi ${about_kaffi}`}>About Kaffi</Link>
                <Button className ={`navbar-button ${navbar_button}`} text="Sign Up"/>
                <Link to='/menu' className={`menu-logo ${menu_logo}`}/>
            </div>
        </div>
        </>
    );
}  
export default Header; 