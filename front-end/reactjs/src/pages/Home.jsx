import "../style/home.css";
import Button from "../components/Button";
import Tag from "../components/Tag";
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const navigate = useNavigate();
    const redirectToApplyPage = () => {
        navigate('/scholarships');
    }

    const redirectToDonatePage = () => {
        navigate('/donate');
    }

    const redirectToVolunteerPage = () => {
        navigate('/applications');
    }

    return (
        <div className="home">
            <div className="home-text">
                <p className="home-title1">Because Investing In Education Pays The Highest Return</p>
                <p className="home-title2">CONTINUE FOR YOURSELF, YOUR FAMILY, LEBANON, AND FOR A BETTER WORLD</p>
            </div>
            
            <div className="home-buttons"> 
                <div >
                    <Button className='home-button1' text='Apply' onClick={redirectToApplyPage}/>
                </div>

                <div >
                    <Button className="home-button2" text='Donate' onClick={redirectToDonatePage}/>
                </div>

                <div>
                    <Button  className="home-button3" text='Volunteer' onClick={redirectToVolunteerPage}/> 
                </div>
            </div>
            
            <div className="home-tags">
                <div className="home-tag1">
                    <Tag value="30" text="SCHOLORSHIPS RECEPIENTS"/>
                </div>

                <div className="home-tag2">
                    <Tag value="27,000€ +" text="DONATION"/>
                </div>

                <div className="home-tag3">
                    <Tag value="14+" text="VOLUNTEERS"/> 
                </div>
            </div>
        </div>
    );
}  
export default HomePage; 