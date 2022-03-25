import { useState } from "react"
import { Link } from "react-router-dom";   
import authService from "../features/auth/authService";
import '../style/register.css'
import Button from './Button'
import image from '../assets/images/gmail.png'
import axios from 'axios';


const Register = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        dob: '',
        country_code: '',
        mobile_phone: '',
        country: '',
        city: '',
        profile_picture: '',
        university: '',
        university_country: '',
        university_city: '',
        job: '',
        job_country: '', 
        job_city: '' 
    })

    const uploadImageApi = "http://localhost:8080/users/image";

    const [typeId, setTypeId] = useState();

    const { first_name, last_name, email, password, dob, country_code, mobile_phone, country, city, profile_picture, university, university_country, university_city, job, job_country, job_city} = formData
    
    const onSubmit = async (e) => {
        e.preventDefault()
       const data = {...formData, user_type_id: typeId};
       const res = await authService.register(data);
       console.log(res)
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }

    const handleType = (val) => {
        const id = parseInt(val.target.value);
        setTypeId(id);
    }

    const uploadImage = (e) => {
        let imageFile = e.target.files[0];
        if (imageFile && imageFile.type.startsWith('image')) {
          var formData = new FormData();
          formData.append('image', imageFile, imageFile.name);

          axios.post(uploadImage, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }}
          ).then((image) => console.log(image, "url"))
        } else {

        }
    }

    return (
        <div className="register">

            <div className="register-form">
                <section className='register-heading'>
                    <p className="register-title">
                        Create Account
                    </p>
                    <button className="google-button"><img src={image} alt='logo'/>Sign up with Google</button>
                    <p className="or">-OR-</p>
                </section>

                <section className='form'>
                    <form onSubmit={onSubmit}>

                        <select className="user-type form-control single-line" name="type" id="type" onChange={handleType}>
                            <option className="user-type-option" value="" disabled selected hidden>Select your User Type</option>
                            <option className="user-type-option" value="2">Student</option>
                            <option className="user-type-option" value="3">Mentor</option>
                        </select>

                        {(typeId === 3 || typeId ===2) && 
                        <>
                        <div className="form-group-class">
                            <div className='form-group'>
                                <input type='text' className='form-control' id='first_name' name='first_name' value={first_name} placeholder='First Name' onChange={onChange}/>
                            </div>

                            <div className='form-group'>
                                <input type='text' className='form-control' id='last_name' name='last_name' value={last_name} placeholder='Last Name' onChange={onChange}/>
                            </div>
                        </div>

                        <div className="form-group-class">
                            <div className='form-group'>
                                <input type='email' className='form-control' id='email' name='email' value={email} placeholder='Email' onChange={onChange}/>
                            </div>

                            <div className='form-group'>
                                <input type='text' className='form-control' id='password' name='password' value={password} placeholder='Password' onChange={onChange}/>
                            </div>
                        </div>

                        <div className='form-group form-group-class'>
                            <input type='date' className='form-control single-line dob' id='dob' name='dob' value={dob} placeholder='Date of Birth DD-MM-YYYY' onChange={onChange}/>
                        </div>

                        <div className="form-group-class">
                            <div className='form-group'>
                                <input type='text' className='form-control' id='country_code' name='country_code' value={country_code} placeholder='Mobile Country Code' onChange={onChange}/>
                            </div>

                            <div className='form-group'>
                                <input type='text' className='form-control' id='mobile_phone' name='mobile_phone' value={mobile_phone} placeholder='Mobile Number' onChange={onChange}/>
                            </div>
                        </div>

                        <div className="form-group-class">
                            <div className='form-group'>
                                <input type='text' className='form-control' id='country' name='country' value={country} placeholder='Current Country' onChange={onChange}/>
                            </div>

                            <div className='form-group'>
                                <input type='text' className='form-control' id='city' name='city' value={city} placeholder='Current City' onChange={onChange}/>
                            </div>
                        </div>

                        <div className="form-group-class group">
                            <div className='form-group'>
                                <input type='text' className='form-control single-line' id='university' name='university' value={university} placeholder='University' onChange={onChange}/>
                            </div>
                            <div className="sub-group">
                                <div className='form-group'>
                                    <input type='text' className='form-control' id='university-country' name='university-country' value={university_country} placeholder='University Country' onChange={onChange}/>
                                </div>

                                <div className='form-group'>
                                    <input type='text' className='form-control' id='university-city' name='university-city' value={university_city} placeholder='University City' onChange={onChange}/>
                                </div>
                            </div>
                        </div>
                        
                        {typeId === 3 &&
                            <div className="form-group-class group">
                                <div className='form-group'>
                                    <input type='text' className='form-control single-line' id='job' name='job' value={job} placeholder='Current Job' onChange={onChange}/>
                                </div>
                                <div className="sub-group">
                                    <div className='form-group'>
                                        <input type='text' className='form-control' id='job-country' name='job-country' value={job_country} placeholder='Job Country' onChange={onChange}/>
                                    </div>

                                    <div className='form-group'>
                                        <input type='text' className='form-control' id='job-city' name='job-city' value={job_city} placeholder='Job City' onChange={onChange}/>
                                    </div>
                                </div>
                            </div>
                        }

                        <div className='form-group form-group-class single-line'>
                            <input type='file' className='form-control single-line' id='profile_picture' name='profile_picture' value={profile_picture} placeholder='Upload a Profile Picture' onChange={uploadImage}/>
                        </div>
                        
                        <div className='form-group form-group-class single-line'>
                            <button type='submit' className='register-btn'>Create Account</button>
                        </div>

                        </>
                        }

                        <div className='signin'>
                            <p>Already have an account? &nbsp;</p>
                            <Link className='login-link' to="/login">Log in</Link>
                        </div>

                    </form>
                </section>
            </div>
        </div>
    )
}

export default Register