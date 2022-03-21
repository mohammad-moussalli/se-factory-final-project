import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';
import ScholarshipTag from '../components/ScholarshipTag';
import img1 from '../assets/images/KaffiBoost.png';
import '../style/boost-scholarship.css'


const BoostScholarship = () => {
  
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
      axios.get(scholarshipCycleApi + "boost")
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
            <img src={img1} alt="logo"></img>
            <h1>Kaffi-Boost Scolarship Program</h1>
          </div>

          <div className='boost-scholarship-header-row2'>
            <div className='boost-scholarship-header-row2-col1'>
              <h2>Program Highlights:</h2>
              <h2>Up to €2,000 To Support Student Expenses</h2>
            </div>

            <div className='boost-scholarship-header-row2-col1'>
              <Button disabled={!cycle.cycle} text='Apply Here' className='scholarship-apply-button' onClick={redirectToForms} />
              <Button text='Check All Programs' className='check-scholarship-button' onClick={redirectToScholarships} />
            </div>
          </div>

          <div className='boost-scholarship-header-row3'>
            <ul>
              <li>Support is given on a semester basis to support the student with expenses until they can secure a part-time job</li>
              <li>Selected applicants will receive a monetary scholarship of up to €2000 to support their expenses for Spring 2022</li>
              <li>Program does not guarantee continuous support beyond Spring 2022 (applications are reviewed each semester and scholarships are dependent on availability of funds)</li>
            </ul>
          </div>
        </div>

        {cycle.cycle &&
          <div>
            <ScholarshipTag 
              name = 'boost'
              cycle={cycle.cycle}
              start_date={cycle.start_date}
              deadline={cycle.deadline}
              results={cycle.results}
            />
          </div>
        }
      </div>  
    )
  }
}

export default BoostScholarship