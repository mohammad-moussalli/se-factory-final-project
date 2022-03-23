import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import '../style/scholarships-tag.css';

const ScholarshipsTag = ({image, name, title, text, start_date, deadline, results}) => {

    const navigate = useNavigate();
    const redirect = () => {
        navigate('/scholarships/' + name)
    }

  return (
    <div className='scholarships-tag'>
        <div className='scholarships-tag-col1'>
            <img src={image} alt="logo"></img>
            <p>Kaffi-{name}</p>
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
                    <p className='date-text'>Open Call </p>
                    <p className='date-text'>{start_date}</p>
                </div>

                <div className='scholarships-tag-date'>
                    <p className='date-text'>Deadline</p>
                    <p className='date-text'>{deadline}</p>
                </div>

                <div className='scholarships-tag-date'>
                    <p className='date-text'>Results</p>
                    <p className='date-text'>{results}</p>
                </div>
                <Button className = "scholarships-details-button" text="View Details" onClick={redirect}/>
            </div>
        </div>
    </div>
  )
}

export default ScholarshipsTag