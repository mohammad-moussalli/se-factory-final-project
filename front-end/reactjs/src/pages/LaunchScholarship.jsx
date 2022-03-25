import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';
import ScholarshipTag from '../components/ScholarshipTag';
import img1 from '../assets/images/KaffiLaunch.png';
import '../style/launch-scholarship.css'
import EligibiltyCriteria from '../components/EligibiltyCriteria';
import HelpfulTips from '../components/HelpfulTips';
import FaqsTag from '../components/FaqsTag';


const LaunchScholarship = () => {
  
  const [cycle, setCycle] = useState(null)
  const scholarshipCycleApi = "http://localhost:8080/scholarships/get-cycle/"
  
  const navigate = useNavigate()
  const redirectToForms = () => {
    navigate('/scholarship/forms');
  }

  const redirectToScholarships = () => {
    navigate('/scholarships');
  }
  useEffect( () => {
      axios.get(scholarshipCycleApi + "launch")
      .then(response => {
        setCycle(response.data.response)})
      .catch(err => {
          console.log(err)
      });
  }, [])

  if (!cycle){
    return (
      <div>
        <Spinner/>
      </div>
    )
  }  else {
    return(
      <div className='launch-scholarship'> 
        <div className='launch-scholarship-header'>
          <div className='launch-scholarship-header-row1'>
            <img className='launch-image' src={img1} alt="logo"></img>
            <div className='launch-scholarship-header-row1-col2'>
            <p className='launch-scholarship-title'>Kaffi-Launch Scolarship Program</p>
              {!cycle.cycle &&
                <p className='newsletter'>No open cycle currently, Subscribe to our Newsletter to receive the updates</p>
              }
            </div>
          </div>

          <div className='launch-scholarship-header-row2'>
            <div className='launch-scholarship-header-row2-col1'>
              <p className='launch-scholarship-title-subheader'>Program Highlights:</p>
              <p className='launch-scholarship-title-subheader'>Up to €2,000 To Cover Tuition Fees</p>
            </div>

            <div className='launch-scholarship-header-row2-col1'>
              {cycle.cycle ?
                <Button text='Apply Here' className='scholarship-apply-button' onClick={redirectToForms} />
                :<Button disabled={true} text='Apply Soon' className='disabled-scholarship-apply-button'/>
              }
              <Button text='Check All Programs' className='check-launch-scholarship-button' onClick={redirectToScholarships} />
            </div>
          </div>

          <div className='launch-scholarship-header-row3'>
            <ul>
              <li>Support is given on a semester basis to support the student with tuition fees</li>
              <li>Kaffi may choose to pay the tuition contribution directly to the student's university </li>
              <li>The individual scholarship amounts are not pre-assigned, funds will be allocated on a case-by-case basis after the selection process (up to €2000)</li>
              <li>Program does not guarantee continuous support beyond {cycle.cycle ? cycle.cycle : "Spring 2022"} (applications are reviewed each semester and scholarships are dependent on availability of funds). The goal is to support the students most in need.</li>
            </ul>
          </div>
        </div>

        {cycle.cycle &&
          <div>
            <ScholarshipTag 
              name = 'launch'
              cycle={cycle.cycle}
              start_date={cycle.start_date}
              deadline={cycle.deadline}
              results={cycle.results}
            />
          </div>
        }

        <div>
          <EligibiltyCriteria />
          <HelpfulTips />
          <FaqsTag />
        </div>
      </div>  
    )
  }
}

export default LaunchScholarship