import '../style/success-stories.css';
import img from '../assets/images/SuccessStoryProfile.png';

const SuccessStories = () => {
  return (
    <div className="success-stories-container">
      <div className="success-stories">
        <div className='success-stories-image'>
          <img src={img} alt="profile-pic"></img>
        </div>

        <div className='success-stories-text'>
          <p className='success-stories-message'>“ We were going back home until Kaffi gave us hope again to survive abroad and continue our education! ”</p>
          <p className='success-stories-user'>Dans & Mohamad El Hajjar | General Medicine</p>
        </div>
      </div>

      <div className="success-stories">
        <div className='success-stories-image'>
          <img src={img} alt="profile-pic"></img>
        </div>

        <div className='success-stories-text'>
          <p className='success-stories-message'>“ We were going back home until Kaffi gave us hope again to survive abroad and continue our education! ”</p>
          <p className='success-stories-user'>Dans & Mohamad El Hajjar | General Medicine</p>
        </div>
      </div>
    </div>
  )
}

export default SuccessStories