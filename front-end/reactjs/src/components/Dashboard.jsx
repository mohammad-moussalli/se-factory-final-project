import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import image from '../assets/images/DashboardProfilePicture.png';
import '../style/dashboard.css'
import axios from "axios";
import { useEffect, useState } from "react";
import pen from '../assets/images/edit-pen.png'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
var moment = require('moment');


const Dashboard = () => {

    const [typeId, setTypeId] = useState();
    const [type, setType] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [updated_password, setUpdatedPassword] = useState();

    const [country, setCountry] = useState();
    const [updated_country, setUpdatedCountry] = useState();

    const [city, setCity] = useState();
    const [updated_city, setUpdatedCity] = useState();

    const [university, setUniversity] = useState();
    const [updated_university, setUpdatedUniversity] = useState();

    const [updated_university_country, setUpdatedUniversityCountry] = useState();

    const [updated_university_city, setUpdatedUniversityCity] = useState();

    const [updated_job, setUpdatedJob] = useState();

    const [updated_job_country, setUpdatedJobCountry] = useState();

    const [updated_job_city, setUpdatedJobCity] = useState();

    const [createdAt, setCreatedAt] = useState();
    const [profile_picture, setProfilePicture] = useState();
    const [updated_profile_picture, setUpdatedProfilePicture] = useState();
    
    const getUserApi = "http://localhost:8080/users/"
    const updateUserApi = `http://localhost:8080/users/update/`

    const test2Api = `http://localhost:8080/users/test2`


    const getUser = async () => {
        const token = localStorage.getItem("user");
        axios.get(getUserApi, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
            setFirstName(response.data.first_name)
            setLastName(response.data.last_name)
            setCountry(response.data.country)
            setCity(response.data.city)
            setUniversity(response.data.university)
            setType(response.data.type)
            setCreatedAt(moment(response.data.createdAt).format('DD MMM, YYYY'))
            setProfilePicture(response.data.profile_picture)
        }).catch (err => {
            console.log(err)
        });
    }
    const [searchParams, setSearchParams] = useSearchParams();

    const GoogleAuthentication = async () => {
        const code = searchParams.get("code");
        console.log(code)
        await axios.post(test2Api, { code } )
        }
    
    const updateUser = async () => {
        const token = localStorage.getItem("user")
        await axios.post(updateUserApi, { password: updated_password, country: updated_country, city: updated_city, university: updated_university, university_country: updated_university_country, university_city: updated_university_city, job: updated_job, job_country: updated_job_country, job_city: updated_job_city, profile_picture: updated_profile_picture} ,
        { headers: {"Authorization" : `Bearer ${token}`} } )
    }

    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        const token = localStorage.getItem("user")

        try {
            await fetch(`http://localhost:8080/users/upload-image`, {
                method: 'POST',
                // mode: 'no-cors',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json',
                            "Authorization" : `Bearer ${token}` },
            });
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => { 
        // GoogleAuthentication()
        getUser() 
        uploadImage()
    }, []);

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
        window.location.reload(false);    

    }

    const navigate = useNavigate()
    const redirectToApplcations = () => {
    navigate('/applications');
    }

    const redirectToBuddies = () => {
        navigate('/buddies');
        }

    if (localStorage.getItem('user') == null) {
        return (
          <h1 className="dashboard prohibited-entry">Please Register or Login to access this page</h1>
        )} else {
          return ( 
            <div className='dashboard-component'>
                <div className='dashboard-sidebar'>
                    <div className='dashboard-profile-picture'>
                        <img className='dashboard-profile-image' src={profile_picture} alt='profile-picture'/>
                        <button className='edit-profile-picture-button' onClick={openEditPicture}><img src={pen} alt='pen'></img></button>
                    </div>

                    {editPicture &&
                        <form className='edit-profile-picture-tag' onSubmit={handleSubmitFile}>
                            <div className='edit-profile-picture-header'>
                                <p className='edit-profile-picture-title'>Edit Profile Picture</p>
                            </div>
                            <div className='edit-profile-picture-container'>
                                <input type="file" name='image' id="upload-piture" value={fileInputState} multiple accept="image/*" onChange={handleFileInputChange} />
                            </div>
                            <div className='edit-profile-picture-buttons'>
                                <Button className='edit-profile-picture-cancel-button' onClick={closeEditPicture} text='Close'/>
                                <button className='edit-profile-picture-update-button' type='submit'>Save</button>
                            </div>
                        </form>
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
                                    </form>
                                </AccordionDetails>
                            </Accordion> 
                        </div>
                        <Button className='applications-button' text='View Applications' onClick={redirectToApplcations}/>                
                        <Button className='buddies-button' text='Connect with Buddies' onClick={redirectToBuddies}/>                        

                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;