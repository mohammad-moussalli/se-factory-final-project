import '../style/records.css'
import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import Donut from './Donut';
const Records = () => {

    const [scholarshipRecords, setScholarshipRecords] = useState(null)
    const getScholarshipRecordsApi = "http://localhost:8080/applications/scholarship/records"

    useEffect( async () => {
        await axios.get(getScholarshipRecordsApi)
        .then(response => {
            setScholarshipRecords(response.data.response)
        })
        .catch(err => {
            console.log(err)
        });
    }, [])

    const [scholarships, setScholarships] = useState(null)
    const getScholarshipsApi = "http://localhost:8080/scholarships";

    useEffect( async () => {
        await axios.get(getScholarshipsApi)
        .then(response => {
            setScholarships(response.data)})
        .catch(err => {
            console.log(err)
        });
    }, [])

    const [cycleId, setCycleId] = useState(null)

    const handleType = (val) => {
      const id = parseInt(val.target.value);
      setCycleId(id);
    }

    let applicants = 0;
    let launch_applicants = 0;
    let boost_applicants = 0;

    if(scholarshipRecords){
        for( let i = 0; i <scholarshipRecords.length; i++){
            applicants += scholarshipRecords[i].cycle_applicants
            if(scholarshipRecords[i].name =='Launch'){
                launch_applicants = scholarshipRecords[i].cycle_applicants
            }
            if(scholarshipRecords[i].name =='Boost'){
                boost_applicants = scholarshipRecords[i].cycle_applicants
            }
        }
    }


    if (!scholarshipRecords){
      return <Spinner/>
    } else{
         return (
            <div className='records-statistics'>
                <div className='records-statistics-row1'>
                  <div className='records-scholarship-name'>
                  {Array.isArray(scholarships) && scholarships.map((scholarship) => {
                        return(
                            <>
                                <p className='records-scholarship-name-text'>Kaffi {scholarship.name}</p>
                            </> 
                        )
                    })}
                    
                  </div>

                  <div className='records-scholarship-cycle-year'>
                    <select className="records-scholarship-cycle" name="scholarship-cycle" id="scholarship-cycle"  onChange={handleType}>
                        {Array.isArray(scholarshipRecords) && scholarshipRecords.map((scholarshipRecord) => {

                        return(
                            <>
                              <option className="records-scholarship-cycle-option" value={scholarshipRecord.cycle_id}>{scholarshipRecord.cycle}</option>
                            </> 
                        )
                        })}
                    
                    </select>
                  </div>
                </div>

                <div className='records-statistics-row2'>
                    <div className='records-applicant-recepient-table'>
                        <div className='records-applicant-recepient-table-col1'>
                            <p className='records-applicant-recepient-text'>Program</p>
                            {Array.isArray(scholarships) && scholarships.map((scholarship) => {
                              return(
                                <div className='records-applicant-recepient-program-name'>
                                <div className={`records-applicant-recepient-color-container${scholarship.id}`}></div>
                                      <p className='records-applicant-recepient-scholarship-name'>Kaffi {scholarship.name}</p>
                                      </div>
                                )
                            })}
                        </div>
                        <div className='records-applicant-recepient-table-col2'>
                            <p className='records-applicant-recepient-text'>Applicant</p>
                            {Array.isArray(scholarshipRecords) && scholarshipRecords.map((scholarshipRecord) => {
                        return(
                              <>
                                  {cycleId === scholarshipRecord.cycle_id ?
                                      <div className='number-of-applicants'>{scholarshipRecord.cycle_applicants}</div>
                                      :<div className='number-of-applicants'>0</div>                             
                                  }
                              </> 
                        )
                        })}
                        
                        </div>
                        <div className='records-applicant-recepient-table-col3'>
                            <p className='records-applicant-recepient-text'>Recepient</p>
                            {Array.isArray(scholarshipRecords) && scholarshipRecords.map((scholarshipRecord) => {
                        return(
                               <>
                                  {cycleId === scholarshipRecord.cycle_id ?
                                      <div className='number-of-recepients'>{scholarshipRecord.cycle_recepients}</div>
                                      :<div className='number-of-recepients'>0</div>                           
                                  }
                              </> 
                        )
                        })}
                        </div>
                    </div>

                    <div className='records-dognut-chart'>
                        <div className='donut-chart'> 
                            <Donut launch_applicants={launch_applicants} boost_applicants={boost_applicants} applicants={applicants}/>
                        </div>
                    </div>
                </div>
            </div>
          )}
}

export default Records