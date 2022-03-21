import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import '../style/scholarship-tag.css';

const ScholarshipTag = ({image, name, title, text, start_date, deadline, results}) => {

    const navigate = useNavigate();
    const redirect = () => {
        navigate('/scholarship/' + name)
    }

  return (
    <div className='scholarship-tag'>
        <div className='scholarship-tag-col1'>
            <img src={image} alt="logo"></img>
            <h3>Kaffi-{name}</h3>
        </div>

        <div className='scholarship-tag-col2'>
            <div className='scholarship-tag-row1'>
                {title}
            </div>

            <div className='scholarship-tag-row2'>
                {text}
            </div>

            <div className='scholarship-tag-row3'>
                <div className='scholarship-tag-date'>
                    <h6>Open Call </h6>
                    <h6>{start_date}</h6>
                </div>

                <div className='scholarship-tag-date'>
                    <h6>Deadline</h6>
                    <h6>{deadline}</h6>
                </div>

                <div className='scholarship-tag-date'>
                    <h6>Results</h6>
                    <h6>{results}</h6>
                </div>
                <Button className = "scholorship-details-button" text="View Details" onClick={redirect}/>
            </div>
        </div>
    </div>
  )
}

export default ScholarshipTag