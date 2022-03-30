import '../style/success-stories.css';
import img from '../assets/images/SuccessStoryProfile.png';


const SuccessStories = ({name, story}) => {


      return (
        <div className="success-stories-container">
          <div className="success-stories">

                
                    <div className="success-stories">
                      <div className='success-stories-image'>
                        <img src={img} alt="profile-pic"></img>
                      </div>
                      <div className='success-stories-text'>
                        <p className='success-stories-message'>{story}</p>
                        <p className='success-stories-user'>{name}</p>
                      </div>
                    </div>
                  
      
            </div>
        </div>
      )
}


export default SuccessStories