import { useState } from "react"
import '../style/records.css'

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

  return (
    <div className='records-statistics'>
        <div className='records-statistics-row1'>
          <div className='records-scholarship-name'>
            <p className='records-scholarship-name-text'>Kaffi Launch</p>
            <p className='records-scholarship-name-text'>Kaffi Boost</p>
          </div>

          <div className='records-scholarship-cycle-year'>
            <select className="records-scholarship-cycle" name="scholarship-cycle" id="scholarship-cycle">
                <option className="records-scholarship-cycle-option" value="" disabled selected hidden>Select Cycle</option>
                <option className="records-scholarship-cycle-option" value="2">Fall</option>
                <option className="records-scholarship-cycle-option" value="3">Spring</option>
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
                    <div className='records-applicant-recepient-program-name'>
                        <div className='records-applicant-recepient-color-container1'></div>
                        <p className='records-applicant-recepient-scholarship-name'>Kaffi Launch</p>
                    </div>
                    <div className='records-applicant-recepient-program-name'>
                        <div className='records-applicant-recepient-color-container2'></div>
                        <p className='records-applicant-recepient-scholarship-name'>Kaffi Boost</p>
                    </div>
                </div>
                <div className='records-applicant-recepient-table-col2'>
                    <p className='records-applicant-recepient-text'>Applicant</p>
                    <div className='number-of-applicants'>10</div>
                    <div className='number-of-applicants'>12</div>
                </div>
                <div className='records-applicant-recepient-table-col3'>
                    <p className='records-applicant-recepient-text'>Recepient</p>
                    <div className='number-of-recepients'>5</div>
                    <div className='number-of-recepients'>6</div>
                </div>
            </div>

            <div className='records-dognut-chart'>
              <div className='donut-chart'>DONUT CHART</div>
            </div>
        </div>

    </div>
  )
}

export default Records