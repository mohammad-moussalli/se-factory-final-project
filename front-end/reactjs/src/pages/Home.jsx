import "../style/home.css";
import Button from "../components/Button";
import Tag from "../components/Tag"

const HomePage = () => {
    return (
        <div className="home">
            <div className="home-text">
                <h1 className="home-title1">Because Investing In Education Pays The Highest Return</h1>
                <h3 className="home-title2">CONTINUE FOR YOURSELF, YOUR FAMILY, LEBANON, AND FOR A BETTER WORLD</h3>
            </div>
            
            <div className="home-buttons"> 
                <div >
                    <Button className='home-button1' text='Apply'/>
                </div>

                <div >
                    <Button className="home-button2" text='Donate'/>
                </div>

                <div>
                    <Button  className="home-button3" text='Volunteer'/> 
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