import React from 'react'
import Scholarship from '../components/Scholarship'
import '../style/scholarship.css'
import img1 from '../assets/images/RankingSystem1.png';
import img2 from '../assets/images/RankingSystem2.png';
import img3 from '../assets/images/apply1.png';
import img4 from '../assets/images/apply2.png';
import img5 from '../assets/images/apply3.png';
import img6 from '../assets/images/apply4.png';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';


const Scholarships = () => {

  const navigate = useNavigate()
  const redirect = () => {
    navigate('/faq');
}
  return (
    <div className='scholarship'>
      <div className='scholarship-page-header'>
        <p className='scholarship-title'>Scholarship Programs</p>
        <p className='scholarship-title-subheader'>Kaffi is providing the following scholarship programs to help Lebanese students throughout their educations journey abroad. Make sure to check the details and eligibility program of each before applying.</p>
      </div>
      <Scholarship/>

      <div className='ranking-system'>

        <div className='ranking-system-row1'>
          <p className='scholarship-title'>Our Ranking System</p>
        </div>

        <div className='ranking-system-row2'> 
          <img src={img1} alt="logo"></img>
          <p className='ranking-system-text'>Automated anonymous ranking system is made based on the information submitted in the application</p>
        </div>

        <div className='ranking-system-row3'> 
          <img src={img2} alt="logo"></img>
          <p className='ranking-system-text'>Shortlisted applications undergo a second round of revision which includes collecting additional information and possible interview, after which the Kaffi team will make a final selection</p>
        </div>

      </div>

      <div className='ranking-process'>
        <div className='ranking-process-description'>
          <p className='ranking-process-title'>Few Notes About Ranking Process:</p>
          <p className='ranking-process-text'>While we welcome applications from all students abroad, the automated ranking system will prioritize:</p>
          <p className='ranking-process-text'>Students who left Lebanon before the beginning of the economic crisis (October 2019)</p>
          <p className='ranking-process-text'>Students studying in European Union (EU)</p>
          <p className='ranking-process-text'>Students not studying in countries with very high tuition fees (e.g. UK)</p>
        </div>
      </div>

      <div className='steps-apply'>

        <div className='steps-apply-row1'>
          <p className='scholarship-title'>Steps To Apply</p>
          <p className='scholarship-title-subheader'>Check our FAQ page for some common questions</p>
        </div>

        <div className='steps-apply-row2'>
          <div className='steps-to-apply1'> 
            <img src={img3} alt="logo"></img>
            <p className='steps-apply-text'>Select a program</p>
          </div>

          <div className='steps-to-apply2'> 
            <img src={img4} alt="logo"></img>
            <p className='steps-apply-text'>Pass the eligibility criteria & complete the online application</p>
          </div>

          <div className='steps-to-apply3'> 
            <img src={img5} alt="logo"></img>
            <p className='steps-apply-text'>If shortlisted, you might be contacted for an interview</p>
          </div>

          <div className='steps-to-apply4'> 
            <img src={img6} alt="logo"></img>
            <p className='steps-apply-text'>If accepted, you will receive an email by the end of each cycle</p>
          </div>
        </div>
        <Button className='faq-button-scholarships' text='FAQ Page' onClick={redirect}/>
      </div>

      

    </div>
  )
}

export default Scholarships