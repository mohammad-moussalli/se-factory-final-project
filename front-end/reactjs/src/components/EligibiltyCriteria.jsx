import React from 'react'
import img1 from '../assets/images/EligibiltyCriteria.png'
import '../style/eligibilty-criteria.css'

const EligibiltyCriteria = () => {
  return (
    <div className='eligibilty-criteria'>
        <div className='eligibilty-criteria-col1'>
            <h1>Eligibility Criteria</h1>
            <h2>In order for your application to be considered you will need to pass the eligibility criteria:</h2>
            <h6 className='eligibility-list'>✓  The student is a Lebanese Citizen </h6>
            <h6 className='eligibility-list'>✓  The student doesn’t hold citizenship in any European country, the US, or the country of study </h6>
            <h6 className='eligibility-list'>✓  The student doesn’t hold a degree from any European country, the US, or the country of study </h6>
            <h6 className='eligibility-list'>✓  The student maintains satisfactory academic performance </h6>
        </div>

        <div className='eligibilty-criteria-col2'>
            <img src={img1} alt="logo"></img>
        </div>

    </div>
  )
}

export default EligibiltyCriteria