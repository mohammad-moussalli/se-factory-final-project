import image from '../assets/images/about-us1.png';
import '../style/team-tag.css';

const TeamTag = () => {
  return (
    <div className='team-tag'>
        <div className='team-tag-image'>
            <img src={image} alt='Donation'/>            
        </div>

        <div className='team-tag-text'>
            <div>
                <p className='team-tag-name'>Name</p>
            </div>
            <div>
                <p className='team-tag-title'>Title</p>
                <p className='team-tag-role'>Role</p>  
            </div>
            
        </div>
    </div>
  )
}

export default TeamTag