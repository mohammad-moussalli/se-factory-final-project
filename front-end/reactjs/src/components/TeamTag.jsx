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
                <h6>Name</h6>
            </div>
            <div>
                <h6>Title</h6>
                <h6>Role</h6>  
            </div>
            
        </div>
    </div>
  )
}

export default TeamTag