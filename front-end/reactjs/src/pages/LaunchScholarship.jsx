import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';


const LaunchScholarship = () => {
  
  const [cycle, setCycle] = useState(null)
  const scholarshipCycleApi = "http://localhost:8080/scholarships/get-cycle/"

  
  const navigate = useNavigate()
  const redirect = () => {
    navigate('/scholarship/forms');
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
      <div>
        {cycle.cycle &&
          <div>
            <div>{cycle.cycle}</div>
            <div>{cycle.start_date}</div>
            <div>{cycle.deadline}</div>
            <div>{cycle.results}</div>
            <Button disabled={!cycle.cycle} text='Apply Here' className='scolarship-apply-button' onClick={redirect} />
          </div>
        }

      </div>  
    )
  }

}

export default LaunchScholarship
