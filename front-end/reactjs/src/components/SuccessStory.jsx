import '../style/success-story.css';
import img from '../assets/images/SuccessStoryProfile.png';


const SuccessStory = ({story, name}) => {

  return (
        <div className="success-story-container">
            <div className="success-story">
              <div className='success-story-image'>
                  <img src={img} alt="profile-pic"></img>
              </div>

              <div className='success-story-text'>
                  <p className='success-story-message'>{story}</p>
                  <p className='success-story-user'>{name}</p>
              </div>
            </div>
        </div>
      )
  
}

export default SuccessStory