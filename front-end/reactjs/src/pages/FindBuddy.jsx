import image from '../assets/images/vision.png';
import ContactTag from '../components/ContactTag';
import Button from '../components/Button';
import '../style/find-buddy.css'
import { useNavigate } from 'react-router-dom';


const Team = () => {

  const navigate = useNavigate()
  const redirect = () => {
      navigate('/records');
  }

  return (
    <div className='find-buddy'>
      
      <div className='header'>
        <p className='title'>Buddies</p>
        <p className='title-subheader'>Many of us remember their first day abroad as one of the most interesting yet challenging days in our lives; embarking on a new journey yet having tons of questions and concerns and above all the feel of being a stranger. If you have been abroad for a while and you have already settled in and figured the answers for most of the questions you thought about on your first day, how about you be that person you wished you had on the first day and lend a hand for a new student? </p>
      </div>

      <div className='buddies'>
        <div className='buddies-title'>
          <p className='title'>Kaffi Buddies</p>
        </div>

        <div className='buddy-pictures'>
          <ContactTag />
          <ContactTag />
          <ContactTag />
          <ContactTag />
          <ContactTag />
          <ContactTag />
          <ContactTag />
          <ContactTag />
          <ContactTag />
          <ContactTag />

        </div>
      </div>

      <div className='vision'>
        <div className='vision-text'>
          <p className='title'>Our Vision</p>
          <p className='text'>At Kaffi, we believe that education is the best form of investment for the future of an individual, a family and a community.  Our goal is to remove financial obstacles for students and make it possible for them to focus on the educational path they have already invested a lot in. This in return will help create educated young leaders, with an international exposure, who will move Lebanon forward.</p>
        </div>

        <div className='vision-picture'>
          <img  className='team-vision-image' src={image} alt='logo'/>            

        </div>
      </div>

      <div className='mission'>
        <div className='mission-text'>
          <p className='title'>Our Mission</p>
          <p className='text'>Amid the current economic crisis and the unresolved dollar-lira problem, we believe that the best way forward for many Lebanese families is investing in their youth’s education abroad. This will prevent these students from losing their current enrollment, allow them to eventually land better jobs and thus help their families and community prosper. Our priority at Kaffi is preventing the scenarios where students abroad are forced to go back, before completing their studies, due to financial hardships.</p>
          <Button onClick={redirect} text="View Our Records" className='mission-button'/>
       </div>
      </div>

    </div>
  )
}

export default Team