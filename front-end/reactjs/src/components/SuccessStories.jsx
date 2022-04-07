import '../style/success-stories.css';

const SuccessStories = ({name, story, picture}) => {

      return (
        <div className="success-stories-container">
          <div className="success-stories">
              <div className="success-stories">
                <div className='success-stories-image'>
                  <img className='success-stories-picture' src={picture} alt="profile-pic"></img>
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