import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import '../style/faqs-tag.css';

const FaqsTag = () => {

    const navigate = useNavigate();
    const redirect = () => {
        navigate('/faq');
    }

    return (
        <div className='faqs-tag'>
            <div className='faqs-tag-header'>
                <p className='faqs-header'>Check our FAQ page for some common questions or email us at &nbsp;</p> 
                <a href="mailto: apply@kaffi-lb.org" target="_blank" className='faq-email-link'> apply@kaffi-lb.org</a>
            </div>
            <Button className='faqs-tag-button' text='FAQ Page' onClick={redirect}/>
        </div>
    )
}

export default FaqsTag