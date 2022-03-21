import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import '../style/scholarships-tag.css';

const ScholarshipsTag = ({image, name, title, text, start_date, deadline, results}) => {

    const navigate = useNavigate();
    const redirect = () => {
        navigate('/scholarship/' + name)
    }

  return (
    <div className='scholarships-tag'>
        <div className='scholarships-tag-col1'>
            <img src={image} alt="logo"></img>
            <h3>Kaffi-{name}</h3>
        </div>

        <div className='scholarships-tag-col2'>
            <div className='scholarships-tag-row1'>
                {title}
            </div>

            <div className='scholarships-tag-row2'>
                {text}
            </div>

            <div className='scholarships-tag-row3'>
                <div className='scholarships-tag-date'>
                    <h6>Open Call </h6>
                    <h6>{start_date}</h6>
                </div>

                <div className='scholarships-tag-date'>
                    <h6>Deadline</h6>
                    <h6>{deadline}</h6>
                </div>

                <div className='scholarships-tag-date'>
                    <h6>Results</h6>
                    <h6>{results}</h6>
                </div>
                <Button className = "scholorships-details-button" text="View Details" onClick={redirect}/>
            </div>
        </div>
    </div>
  )
}

export default ScholarshipsTag