import '../style/success_stories.css';
import img from '../assets/images/SuccessStoryProfile.png';

const SuccessStories = () => {
  return (
    <div className="success-container">
      <div className="success-story">
        <div className='success-story-image'>
          <img src={img} alt="profile-pic"></img>
        </div>

        <div className='success-story-text'>
          <p className='success-story-message'>“ We were going back home until Kaffi gave us hope again to survive abroad and continue our education! ”</p>
          <p className='success-story-user'>Dans & Mohamad El Hajjar | General Medicine</p>
        </div>
      </div>

      <div className="success-story">
        <div className='success-story-image'>
          <img src={img} alt="profile-pic"></img>
        </div>

        <div className='success-story-text'>
          <p className='success-story-message'>“ We were going back home until Kaffi gave us hope again to survive abroad and continue our education! ”</p>
          <p className='success-story-user'>Dans & Mohamad El Hajjar | General Medicine</p>
        </div>
      </div>
    </div>
  )
}

export default SuccessStories