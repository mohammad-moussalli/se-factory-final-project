import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';

const BoostScholarship = () => {
  
  const [cycle, setCycle] = useState(null)
  const scholarshipCycleApi = "http://localhost:8080/scholarships/get-cycle/"

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
      <div>
        {cycle.cycle &&
          <div>
            <div>{cycle.cycle}</div>
            <div>{cycle.start_date}</div>
            <div>{cycle.deadline}</div>
            <div>{cycle.results}</div>
            <button disabled={!cycle.cycle}>apply</button>
          </div>}
        
      </div>  
    )
  }

}

export default BoostScholarship