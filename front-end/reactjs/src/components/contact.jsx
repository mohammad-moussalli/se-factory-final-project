import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import image from '../assets/images/DashboardProfilePicture.png';
import '../style/dashboard.css'
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import pen from '../assets/images/edit-pen.png'
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

const [editPicture, setEditPicture] = useState();

const openEditPicture = () => {
    setEditPicture(true)
}

const closeEditPicture = () => {
    setEditPicture(false)
}
        return ( 
        <div className='dashboard-component'>
            <div className='dashboard-forms'>
                <div className='dashboard-title'>
                    <p className='dashboard-welcome-title'>Welcome back {first_name}</p>
                    <p className='dashboard-join-date'>Joined {createdAt}</p>
                </div>

                <div className='dashboard-update-form'>
                    <div className="accordion">
                        <Accordion className='accordion-part'>
                            <AccordionSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />} aria-controls={`panel1a-content`} id={`panel1a-header`}>
                                <Typography className="dashboard-form-title">My Personal Information</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="accordion-details">
                            <form className='contact-us-form' onSubmit={contactUs}>
                                <p className="contact-us-title">Contact Us</p>
                                <input className="contact-us-input" placeholder="Full Name" onChange={e => setFullName(e.target.value)}/>
                                <input className="contact-us-input" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                                <input className="contact-us-input" placeholder="Subject" onChange={e => setSubject(e.target.value)}/>
                                <input className="contact-us-input" placeholder="Messsage" onChange={e => setMessage(e.target.value)}/>
                                <div className="contact-us-buttons">
                                    <button className="contact-us-submit-button" type="submit">Submit</button>
                                    <button className="contact-us-submit-button" onClick={closeContactUsForm} >Close</button>
                                </div>
                            </form>
                            </AccordionDetails>
                        </Accordion> 
                    </div>
                    <Button className='applications-button' text='View Applications' onClick={redirectToApplcations}/>
                </div>
            </div>
        </div>
    )
}


export default Contact;