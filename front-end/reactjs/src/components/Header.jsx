import "../style/header.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
    return (
        <>
        <div className="header">
            <i className="kaffi-logo"/>
            <div className="links">
                <Link to='/dashboard' className="about-kaffi">About Kaffi</Link>
                <Button className = "header-button" text="Sign Up"/>
                <Link to='/menu' className="menu-logo"/>
            </div>
        </div>
        </>
    );
}  
export default Header; 