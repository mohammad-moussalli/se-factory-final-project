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



const Dashboard = () => {

    // const [formData, setFormData] = useState({
    //     first_name: '',
    //     last_name: '',
    //     email: '',
    //     password: '',
    //     dob: '',
    //     country_code: '',
    //     mobile_phone: '',
    //     country: '',
    //     city: '',
    //     profile_picture: '',
    //     university: '',
    //     university_country: '',
    //     university_city: '',
    //     job: '',
    //     job_country: '', 
    //     job_city: '' 
    // })

    const [user, setUser] = useState();
    const [typeId, setTypeId] = useState();
    const [email, setEmail] = useState();
    const [type, setType] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [password, setPassword] = useState();
    const [updated_password, setUpdatedPassword] = useState();

    const [dob, setDOB] = useState();
    const [country, setCountry] = useState();
    const [updated_country, setUpdatedCountry] = useState();

    const [city, setCity] = useState();
    const [updated_city, setUpdatedCity] = useState();

    const [university, setUniversity] = useState();
    const [updated_university, setUpdatedUniversity] = useState();

    const [university_country, setUniversityCountry] = useState();
    const [updated_university_country, setUpdatedUniversityCountry] = useState();

    const [university_city, setUniversityCity] = useState();
    const [updated_university_city, setUpdatedUniversityCity] = useState();

    const [job, setJob] = useState();
    const [updated_job, setUpdatedJob] = useState();

    const [job_country, setJobCountry] = useState();
    const [updated_job_country, setUpdatedJobCountry] = useState();

    const [job_city, setJobCity] = useState();
    const [updated_job_city, setUpdatedJobCity] = useState();

    const [createdAt, setCreatedAt] = useState();
    const [profile_picture, setProfilePicture] = useState();
    const [updated_profile_picture, setUpdatedProfilePicture] = useState();

    const [error, setError]  = useState();


    // const { first_name, last_name, email, password, dob, country_code, mobile_phone, country, city, profile_picture, university, university_country, university_city, job, job_country, job_city} = formData
    
    const getUserApi = "http://localhost:8080/users/"
    const updateUserApi = `http://localhost:8080/users/update/`

    const getUser = async () => {
        const token = localStorage.getItem("user");
        axios.get(getUserApi, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
            setFirstName(response.data.first_name)
            setLastName(response.data.last_name)
            setCountry(response.data.country)
            setCity(response.data.city)
            setDOB(response.data.dob)
            setUniversity(response.data.university)
            setType(response.data.type)
            setCreatedAt(response.data.createdAt)
        }).catch (err => {
            console.log(err)
            setError(err)
        });
    }

    const updateUser = async () => {
        const token = localStorage.getItem("user")
        await axios.post(updateUserApi, { password: updated_password, country: updated_country, city: updated_city, university: updated_university, university_country: updated_university_country, university_city: updated_university_city, job: updated_job, job_country: updated_job_country, job_city: updated_job_city, profile_picture: updated_profile_picture} ,
        { headers: {"Authorization" : `Bearer ${token}`} } )
    }

    useEffect(() => { getUser() }, []);

    const handleType = (val) => {
        const id = parseInt(val.target.value);
        setTypeId(id);
    }

    const [editPicture, setEditPicture] = useState();

    const openEditPicture = () => {
        setEditPicture(true)
    }

    const closeEditPicture = () => {
        setEditPicture(false)
    }

    const navigate = useNavigate()
    const redirectToApplcations = () => {
    navigate('/applications');
    }

    if (localStorage.getItem('user') == null) {
        return (
          <h1 className="dashboard">Please Register or Login to access this page</h1>
        )} else {
          return ( 
            <div className='dashboard-component'>
                <div className='dashboard-sidebar'>
                    <div className='dashboard-profile-picture'>
                        <img src={image} alt='profile-picture'/>
                        <button className='edit-profile-picture-button' onClick={openEditPicture}><img src={pen} alt='pen'></img></button>
                    </div>

                    {editPicture &&
                        <div className='edit-profile-picture-tag'>
                            <div className='edit-profile-picture-header'>
                                <p className='edit-profile-picture-title'>Edit Profile Picture</p>
                            </div>
                            <div className='edit-profile-picture-container'>
                                <p>Upload</p>
                            </div>
                            <div className='edit-profile-picture-buttons'>
                                <Button className='edit-profile-picture-cancel-button' onClick={closeEditPicture} text='Cancel'/>
                                <Button className='edit-profile-picture-update-button' text='Save'/>
                            </div>
                        </div>
                    }

                    <div className='dashboard-sidebar-details'>
                    <div div className='dashboard-sidebar-fullname'>
                            <div className='dashboard-sidebar-details-data dashboard-user-name'>{first_name} &nbsp;</div>
                            <div className='dashboard-sidebar-details-data dashboard-user-name'>{last_name}</div>
                        </div>
                        <div className='dashboard-sidebar-details-data dashboard-sidebar-country'>{country}</div>
                        <div className='dashboard-sidebar-details-data dashboard-sidebar-city'>{city}</div>
                        <div className='dashboard-sidebar-details-data dashboard-sidebar-university'>{university}</div>
                        <div className='dashboard-sidebar-details-data dashboard-sidebar-user-type'>{type}</div>
                    </div>
                </div>
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
                                    <form className='UpdateUser' onSubmit={updateUser}>
                                        <input type='text' className='dashboard-form-control' id='password' name='updated_password' value={updated_password} placeholder='Password' onChange={e => setUpdatedPassword(e.target.value)}/>
                                        <input type='text' className='dashboard-form-control' id='country' name='updated_country' value={updated_country} placeholder='Country' onChange={e => setUpdatedCountry(e.target.value)}/>
                                        <input type='text' className='dashboard-form-control' id='city' name='updated_city' value={updated_city} placeholder='City' onChange={e => setUpdatedCity(e.target.value)}/>
                                        <input type='text' className='dashboard-form-control' id='university' name='updated_university' value={updated_university} placeholder='University' onChange={e => setUpdatedUniversity(e.target.value)}/>
                                        <input type='text' className='dashboard-form-control' id='university-country' name='updated_university_country' value={updated_university_country} placeholder='University Country' onChange={e => setUpdatedUniversityCountry(e.target.value)}/>
                                        <input type='text' className='dashboard-form-control' id='university-city' name='updated_university_city' value={updated_university_city} placeholder='University City' onChange={e => setUpdatedUniversityCity(e.target.value)}/>
                                        {typeId === 3 &&
                                            <div>
                                                <input type='text' className='form-control single-line' id='job' name='updated_job' value={updated_job} placeholder='Job' onChange={e => setUpdatedJob(e.target.value)}/>
                                                <input type='text' className='form-control' id='job-country' name='updated_job_country' value={updated_job_country} placeholder='Job Country' onChange={e => setUpdatedJobCountry(e.target.value)}/>
                                                <input type='text' className='form-control' id='job-city' name='updated_job_city' value={updated_job_city} placeholder='Job City' onChange={e => setUpdatedJobCity(e.target.value)}/>
                                            </div>
                                        }
                                        <div className='dashboard-update-button'>
                                            <button className="updateButton" type="submit"> Update</button> 
                                        </div>
                                        {/* <Fragment><h6>{error}</h6></Fragment> */}
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
}

export default Dashboard;