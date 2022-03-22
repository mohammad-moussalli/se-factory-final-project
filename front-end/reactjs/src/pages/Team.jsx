import image from '../assets/images/vision.png';
import TeamTag from '../components/TeamTag';
import Button from '../components/Button';
import '../style/team.css'
import { useNavigate } from 'react-router-dom';


const Team = () => {

  
  const navigate = useNavigate()
  const redirect = () => {
    navigate('/records');
  }

  return (
    <div className='team'>
      
      <div className='header'>
        <h1>The Team</h1>
        <h3>We at Kaffi, are group of professional Lebanese youth, who know what it is like to be in a tough financial situation while studying away from home.  The current unprecedented financial crisis, affecting Lebanon and the new generation of Lebanese students, has driven us to take immediate action and do our best to help! </h3>
      </div>

      <div className='board'>
        <div className='board-title'>
          <h1>Kaffi Board</h1>
        </div>

        <div className='board-pictures'>
          <TeamTag />
          <TeamTag />
          <TeamTag />
          <TeamTag />
          <TeamTag />
        </div>
      </div>

      <div className='members'>
        <div className='members-title'>
          <h1>Kaffi Members</h1>
        </div>

        <div className='members-pictures'>
        <TeamTag />
        <TeamTag />
        <TeamTag />
        <TeamTag />
        <TeamTag />
        <TeamTag />
        <TeamTag />
        <TeamTag />
        <TeamTag />
        <TeamTag />

        </div>
      </div>

      <div className='vision'>
        <div className='vision-text'>
          <h1>Our Vision</h1>
          <p>At Kaffi, we believe that education is the best form of investment for the future of an individual, a family and a community.  Our goal is to remove financial obstacles for students and make it possible for them to focus on the educational path they have already invested a lot in. This in return will help create educated young leaders, with an international exposure, who will move Lebanon forward.</p>
        </div>

        <div className='vision-picture'>
          <img src={image} alt='logo'/>            

        </div>
      </div>

      <div className='mission'>
        <div className='mission-text'>
          <h1>Our Mission</h1>
          <p>Amid the current economic crisis and the unresolved dollar-lira problem, we believe that the best way forward for many Lebanese families is investing in their youth’s education abroad. This will prevent these students from losing their current enrollment, allow them to eventually land better jobs and thus help their families and community prosper. Our priority at Kaffi is preventing the scenarios where students abroad are forced to go back, before completing their studies, due to financial hardships.</p>
          <Button onClick={redirect} text="View Our Records" className='mission-button'/>
       </div>
      </div>

    </div>
  )
}

export default Team