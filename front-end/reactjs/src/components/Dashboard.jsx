import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import image from '../assets/images/DashboardProfilePicture.png';
import '../style/dashboard.css'
import axios from "axios";
import { Fragment, useEffect, useState } from "react";



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
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [password, setPassword] = useState();
    const [dob, setDOB] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [university, setUniversity] = useState();
    const [university_country, setUniversityCountry] = useState();
    const [university_city, setUniversityCity] = useState();
    const [job, setJob] = useState();
    const [job_country, setJobCountry] = useState();
    const [job_city, setJobCity] = useState();
    const [profile_picture, setProfilePicture] = useState();
    const [error, setError]  = useState();
    

    // const { first_name, last_name, email, password, dob, country_code, mobile_phone, country, city, profile_picture, university, university_country, university_city, job, job_country, job_city} = formData
    
    const getUserApi = "http://localhost:8080/users/"
    const updateUserApi = `http://localhost:8080/users/update/`

    const getUser = async () => {
        const token = localStorage.getItem("user")
        axios.get(getUserApi, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
            console.log(user)
            setFirstName(response.data.first_name)
            setLastName(response.data.last_name)
            setDOB(response.data.dob)
            setUniversity(response.data.university)
        }).catch (err => {
            setError("Something went wrong!")
        });
    }

    const updateUser = async () => {
        const token = localStorage.getItem("user")
        axios.post(updateUserApi, { password: password, country: country, city: city, university: university, university_country: university_country, university_city: university_city, job: job, job_country: job_country, job_city: job_city, profile_picture: profile_picture} ,
        { headers: {"Authorization" : `Bearer ${token}`} } )
    }

    useEffect(() => { getUser() }, []);

    const handleType = (val) => {
        const id = parseInt(val.target.value);
        setTypeId(id);
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
                    </div>
                    <div className='dashboard-user-name'>{first_name}</div>
                    <div className='dashboard-user-location'>USA</div>
                </div>
                <div className='dashboard-forms'>
                    <div className='dashboard-title'>
                        <p className='dashboard-welcome-title'>Welcome back Mohammad</p>
                        <p className='dashboard-join-date'>Joined April 2021</p>
                    </div>

                    <div className='dashboard-update-form'>
                        <div className="accordion">
                            <Accordion className='accordion-part'>
                                <AccordionSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />} aria-controls={`panel1a-content`} id={`panel1a-header`}>
                                    <Typography className="dashboard-form-title">My Personal Information</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="accordion-details">

                                    <div className='dashboard-user-details'>
                                        <Typography className="dashboard-form-details">{first_name}</Typography>
                                        <Typography className="dashboard-form-details">{last_name}</Typography>
                                        <Typography className="dashboard-form-details">{dob}</Typography>
                                        <Typography className="dashboard-form-details">{university}</Typography>
                                        {typeId === 3 &&
                                            <Typography className="dashboard-form-details">{job}</Typography>
                                        }
                                    </div>
                                    <form className='UpdateUser' onSubmit={updateUser}>
                                        <input type='text' className='form-control' id='password' name='password' value={password} placeholder='Update Password' onChange={e => setPassword(e.target.value)}/>
                                        <input type='text' className='form-control' id='country' name='country' value={country} placeholder='Update Country' onChange={e => setCountry(e.target.value)}/>
                                        <input type='text' className='form-control' id='city' name='city' value={city} placeholder='Update City' onChange={e => setCity(e.target.value)}/>
                                        <input type='text' className='form-control single-line' id='university' name='university' value={university} placeholder='Update University' onChange={e => setUniversity(e.target.value)}/>
                                        <input type='text' className='form-control' id='university-country' name='university-country' value={university_country} placeholder='Update University Country' onChange={e => setUniversityCountry(e.target.value)}/>
                                        <input type='text' className='form-control' id='university-city' name='university-city' value={university_city} placeholder='Update University City' onChange={e => setUniversityCity(e.target.value)}/>
                                        {typeId === 3 &&
                                            <div>
                                                <input type='text' className='form-control single-line' id='job' name='job' value={job} placeholder='Update Job' onChange={e => setJob(e.target.value)}/>
                                                <input type='text' className='form-control' id='job-country' name='job-country' value={job_country} placeholder='Update Job Country' onChange={e => setJobCountry(e.target.value)}/>
                                                <input type='text' className='form-control' id='job-city' name='job-city' value={job_city} placeholder='Update Job City' onChange={e => setJobCity(e.target.value)}/>
                                            </div>
                                        }
                                        <button className="updateButton" type="submit"> Update</button> 
                                        <Fragment><h6>{error}</h6></Fragment>
                                    </form>
                                </AccordionDetails>
                            </Accordion> 
                            <Accordion className='accordion-part'>
                                <AccordionSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />} aria-controls={`panel2a-content`} id={`panel2a-header`}>
                                    <Typography className="dashboard-form-title">Student Application</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="accordion-details">
                                    <Typography className="dashboard-form-details">HELLO 2</Typography>
                                </AccordionDetails>
                            </Accordion> 
                            <Accordion className='accordion-part'>
                                <AccordionSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />} aria-controls={`panel3a-content`} id={`panel3a-header`}>
                                    <Typography className="dashboard-form-title">Buddy Application</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="accordion-details">
                                    <Typography className="dashboard-form-details">HELLO 3</Typography>
                                </AccordionDetails>
                            </Accordion> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;