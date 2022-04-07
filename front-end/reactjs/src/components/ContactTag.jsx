import image from '../assets/images/TeamImage.png';
import '../style/contact-tag.css';
import Button from './Button';

const ContactTag = () => {

    let text = 'Connect';
    const onClick = () => {
        text = 'Chat'
    }
    
  return (
    <div className='contact-tag'>
        <div className='contact-tag-image'>
            <img src={image} alt='Donation'/>            
        </div>

        <div className='contact-tag-text'>
            <div>
                <p className='contact-tag-name'>Name</p>
            </div>
            <div>
                <p className='contact-tag-title'>Title</p>
                <p className='contact-tag-role'>Role</p>  
            </div>
            
        </div>

        <Button className='contact-tag-button' text={text} onClick={onClick}/>
    </div>
  )
}

export default ContactTag