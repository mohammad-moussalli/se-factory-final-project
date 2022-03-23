import React from 'react'
import img1 from '../assets/images/EligibiltyCriteria.png'
import '../style/eligibilty-criteria.css'

const EligibiltyCriteria = () => {
  return (
    <div className='eligibilty-criteria'>
        <div className='eligibilty-criteria-col1'>
            <p className='eligibility-criteria-header1'>Eligibility Criteria</p>
            <p className='eligibility-criteria-header2'>In order for your application to be considered you will need to pass the eligibility criteria:</p>
            <p className='eligibility-list'>✓  The student is a Lebanese Citizen </p>
            <p className='eligibility-list'>✓  The student doesn’t hold citizenship in any European country, the US, or the country of study </p>
            <p className='eligibility-list'>✓  The student doesn’t hold a degree from any European country, the US, or the country of study </p>
            <p className='eligibility-list'>✓  The student maintains satisfactory academic performance </p>
        </div>

        <div className='eligibilty-criteria-col2'>
            <img src={img1} alt="logo"></img>
        </div>

    </div>
  )
}

export default EligibiltyCriteria