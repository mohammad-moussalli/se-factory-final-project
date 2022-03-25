import "../style/footer.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';


const Footer = () => {

    let footer = 'footer';
        
    
    const location = useLocation();
    if (location.pathname === '/menu' || location.pathname === '/register' || location.pathname === '/login'){
        footer = 'menu-footer';
    }
    


    return (
        <div className={`footer ${footer}`}>
            <div className="footer1">
                <div>
                    <Link to='/about-us' className="footer-text">About Kaffi</Link>
                </div>
                <div>
                <Link to='/team' className="footer-text">Meet the Team</Link>
                </div>
            </div>
            <div className="footer2">
                <div>
                    <icon>a</icon>
                    <icon>b</icon>
                    <icon>c</icon>
                    <icon>d</icon>
                </div>

                <div>
                    <p>All Rights Preserved@kaffi 2022</p>
                </div>
           
            </div>
        </div>
    );
}  
export default Footer; 