import '../style/contact-tag.css';
import Button from './Button';

const ContactTag = (profile_picture, name, country, role) => {

    let text = 'Connect';
    const onClick = () => {
        text = 'Chat'
    }
    
  return (
    <div className='contact-tag'>
        <div className='contact-tag-image'>
            <img className='contact-tag-profile-picture' src={profile_picture} alt='profile_picture'/>            
        </div>

        <div className='contact-tag-text'>
            <div>
                <p className='contact-tag-name'>{name}</p>
            </div>
            <div>
                <p className='contact-tag-title'>{country}</p>
                <p className='contact-tag-role'>{role}</p>  
            </div>
            
        </div>

        <Button className='contact-tag-button' text={text} onClick={onClick}/>
    </div>
  )
}

export default ContactTag