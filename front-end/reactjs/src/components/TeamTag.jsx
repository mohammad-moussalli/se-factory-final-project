import image from '../assets/images/TeamImage.png';
import '../style/team-tag.css';

const TeamTag = ({name, image, position, role}) => {
  return (
    <div className='team-tag'>
        <div className='team-tag-image'>
            <img className='team-tag-profile-picture' src={image} alt='Donation'/>            
        </div>

        <div className='team-tag-text'>
            <div>
                <p className='team-tag-name'>{name}</p>
            </div>
            <div>
                <p className='team-tag-title'>{position}</p>
                <p className='team-tag-role'>{role}</p>  
            </div>
            
        </div>
    </div>
  )
}

export default TeamTag