import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';
import ScholarshipTag from '../components/ScholarshipTag';
import img1 from '../assets/images/KaffiBoost.png';
import '../style/boost-scholarship.css'
import EligibiltyCriteria from '../components/EligibiltyCriteria';
import HelpfulTips from '../components/HelpfulTips';
import FaqsTag from '../components/FaqsTag';

const BoostScholarship = () => {
  
  const [cycle, setCycle] = useState(null)
  const scholarshipCycleApi = "http://localhost:8080/scholarships/get-cycle/"
  
  const navigate = useNavigate()
  const redirectToForms = () => {
    navigate('/applications');
  }

  const redirectToScholarships = () => {
    navigate('/scholarships');
  }
  useEffect( () => {
      axios.get(scholarshipCycleApi + "Boost")
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
      <div className='boost-scholarship'> 
        <div className='boost-scholarship-header'>
          <div className='boost-scholarship-header-row1'>
            <img className='boost-image' src={img1} alt="logo"></img>
            <div className='boost-scholarship-header-row1-col2'>
              <p className='boost-scholarship-title'>Kaffi-Boost Scolarship Program</p>
              {!cycle.cycle &&
                <p className='newsletter'>No open cycle currently, Subscribe to our Newsletter to receive the updates</p>
              }
            </div>
          </div>

          <div className='boost-scholarship-header-row2'>
            <div className='boost-scholarship-header-row2-col1'>
              <p className='boost-scholarship-title-subheader'>Program Highlights:</p>
              <p className='boost-scholarship-title-subheader'>Up to €2,000 To Support Student Expenses</p>
            </div>

            <div className='boost-scholarship-header-row2-col1'>
              {cycle.cycle ?
                <Button text='Apply Here' className='scholarship-apply-button' onClick={redirectToForms} />
                :<Button disabled text='Apply Soon' className='disabled-scholarship-apply-button'/>
              }
              <Button text='Check All Programs' className='check-boost-scholarship-button' onClick={redirectToScholarships} />
            </div>
          </div>

          <div className='boost-scholarship-header-row3'>
            <ul>
              <li>Support is given on a semester basis to support the student with expenses until they can secure a part-time job</li>
              <li>Selected applicants will receive a monetary scholarship of up to €2000 to support their expenses for {cycle.cycle ? cycle.cycle : "Current Cycle"}</li>
              <li>Program does not guarantee continuous support beyond {cycle.cycle ? cycle.cycle : "Current Cycle"} (applications are reviewed each semester and scholarships are dependent on availability of funds)</li>
            </ul>
          </div>
        </div>

        {cycle.cycle &&
          <div>
            <ScholarshipTag 
              name = 'Boost'
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

export default BoostScholarship