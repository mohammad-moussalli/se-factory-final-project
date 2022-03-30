import '../style/records.css'
import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import { Doughnut } from 'react-chartjs-2';

const Records = () => {

  
// const [yearId, setYearId] = useState();
// const [cycleId, setCycleId] = useState();

//     const onChange = (e) => {
        
//     }

//     const handleYear = (val) => {
//         const year = (val.target.year);
//         setYearId(year);
//     }

//     const handleCycle = (val) => {
//         const cycle = parseInt(val.target.cycle);
//         setCycleId(cycle);
//     }

    const [scholarshipRecords, setScholarshipRecords] = useState(null)
    const getScholarshipRecordsApi = "http://localhost:8080/applications/scholarship/records"

    useEffect( async () => {
        await axios.get(getScholarshipRecordsApi)
        .then(response => {
            setScholarshipRecords(response.data.response)})
        .catch(err => {
            console.log(err)
        });
    }, [])

    const [scholarships, setScholarships] = useState(null)
    const getScholarshipsApi = "http://localhost:8080/scholarships";

    const [cycleId, setCycleId] = useState(null)


    useEffect( async () => {
        await axios.get(getScholarshipsApi)
        .then(response => {
            setScholarships(response.data)})
        .catch(err => {
            console.log(err)
        });
    }, [])

    const handleType = (val) => {
      const id = parseInt(val.target.value);
      setCycleId(id);
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
                        <option className="records-scholarship-cycle-option" value="" disabled selected hidden>Select Cycle</option>

                        {Array.isArray(scholarshipRecords) && scholarshipRecords.map((scholarshipRecord) => {
                        return(
                            <>
                              <option className="records-scholarship-cycle-option" value={scholarshipRecord.scholarship_cycle.id}>{scholarshipRecord.scholarship_cycle.cycle}</option>
                            </> 
                        )
                        })}
                    
                    </select>

                    <select className="records-scholarship-year" name="scholarship-year" id="scholarship-year">
                        <option className="records-scholarship-year-option" value="" disabled selected hidden>Select Year</option>
                        <option className="records-scholarship-year-option" value="2">2021</option>
                        <option className="records-scholarship-year-option" value="3">2022</option>
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
                                  {cycleId === scholarshipRecord.scholarship_cycle.id &&
                                      <div className='number-of-applicants'>{scholarshipRecord.cycle_applicants}</div>                            
                                  }
                              </> 
                        )
                        })}
                            {/* <div className='number-of-applicants'>10</div>
                            <div className='number-of-applicants'>12</div> */}
                        </div>
                        <div className='records-applicant-recepient-table-col3'>
                            <p className='records-applicant-recepient-text'>Recepient</p>
                            {Array.isArray(scholarshipRecords) && scholarshipRecords.map((scholarshipRecord) => {
                                console.log(cycleId === scholarshipRecord.scholarship_cycle.cycle , '1')
                                console.log(scholarshipRecord.scholarship_cycle.id, '2')
                                console.log(cycleId, '3')
                        return(
            
                              <>
                                  {cycleId === scholarshipRecord.scholarship_cycle.id &&
                                      <div className='number-of-recepients'>{scholarshipRecord.cycle_recepientss}</div>                            
                                  }
                              </> 
                        )
                        })}
                        </div>
                    </div>

                    <div className='records-dognut-chart'>
                      <div className='donut-chart'>  </div>
                    </div>
                </div>

            </div>
          )}
}

export default Records