import { useState, useEffect } from "react"
import { Link } from "react-router-dom";   
import { useSelector, useDispatch } from 'react-redux'
import '../style/register.css'
import image from '../assets/images/gmail.png'
import { useNavigate } from 'react-router-dom'
import { signup, reset } from '../features/auth/authSlice'
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { addDoc, collection } from "@firebase/firestore";
import React, { useRef } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyB-W8nuhgszpCkf0CqxWQGH4kXyGSdArlE",
        authDomain: "kaffi-project.firebaseapp.com",
        databaseURL: "http://kaffi-project.firebaseio.com",
        projectId: "kaffi-project",
        storageBucket: "gs://kaffi-project.appspot.com",
        messagingSenderId: "884089590617",
        appId: "1:884089590617:web: '23ffbd6d7275d23315f248'",
        measurementId: "G-LLYVEJH9WW",
    };
        
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app, firebaseConfig.storageBucket);

    const db = getFirestore();
    const auth = getAuth();

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
        job_city: '' ,
        user_type_id:''
    })

    const schema = yup.object().shape({
        first_name: yup.string().required("Please Enter your First Name"),
        last_name: yup.string().required("Please Enter your Last Name"),
        email: yup.string().email("Please enter a valid Email").required("Please Enter an Email"),
        dob: yup.string().required("Please Enter you Date of Birth"),
        country_code: yup.number().positive().integer("Please enter a number"),
        user_type_id: yup.number().positive().integer().required('Please choose a User Type'),
        mobile_phone: yup.number().positive().integer("Please enter a number"),
        country: yup.string().required("Please Enter your current Country"),
        city: yup.string().required("Please Enter your  current City"),
        university: yup.string().required("Please Enter your University"),
        university_country: yup.string().required("Please Enter your University Country"),
        university_city: yup.string().required("Please Enter your University City"),
        job: yup.string(),
        job_country: yup.string(),
        job_city: yup.string(),
        password: yup.string().min(6).max(15).required("Please enter a Password"),
    });

    const { register, handleSubmit, formState: { errors }  } = useForm({
        resolver: yupResolver(schema),
    });

    const [typeId, setTypeId] = useState();
    // const [error, setError] = useState(false);

    const { first_name, last_name, email, password, dob, country_code, mobile_phone, country, city, university, university_country, university_city, job, job_country, job_city, user_type_id} = formData
    
    const onSubmit = async (e) => {
        // e.preventDefault()
       dispatch(signup(e))
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    console.log(schema,'hereeeeee')
  
    useEffect(() => {
        if (isError) {
            localStorage.clear()
            throw(message)
        }
    
        if (isSuccess) {
            navigate('/dashboard')
        }
    
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleType = (val) => {
        const id = parseInt(val.target.value);
        setTypeId(id);
    }


    // const email = useRef(null);
    // const password = useRef(null);

    const fs_register = async () => {
        console.log(email, 'here')
        console.log(password, 'here')

      const responseFromAuth = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('here 2')

      const userId = responseFromAuth.user.uid;
        console.log(userId, '1st')
      // saving to firestore
      await addDoc(collection(db, "users"), {
        email: email,
        first_name: first_name,
        last_name: last_name,
        country: country,
        user_type_id: typeId,
        uid: userId,
        city: city,
      });

      // save user to localstorage
      localStorage.setItem(
        "fs_user",
        JSON.stringify({
          email: email,
          uid: userId,
          user_type_id: typeId,
        })
      );

    }

    const eye = <FontAwesomeIcon icon={faEye} />;

    const [fs_user, setFsUser] = useState();

    useEffect(() => {
        // get user from localstorage
        const fs_user = JSON.parse(localStorage.getItem("fs_user"));
    
        if (fs_user) {
          setFsUser(fs_user);
          navigate("/dashboard");
        }
      }, [navigate, setFsUser]);

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

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
                    <form onSubmit= {handleSubmit(onSubmit)}>

                        <select className="user-type form-control single-line" value={typeId} placeholder='First Name' {...register('user_type_id')} name="user_type_id" id="type" onChange={handleType}>
                            <option className="user-type-option" value="" disabled selected hidden>Select your User Type</option>
                            <option className="user-type-option" value="2">Student</option>
                            <option className="user-type-option" value="3">Mentor</option>
                        </select>

                        {(typeId === 3 || typeId ===2) && 
                        <>
                        <div className="form-group-class">
                            <div className='form-group'>
                                <input type='text' className='form-control' id='first_name' name='first_name' value={first_name} placeholder='First Name' {...register('first_name')} onChange={onChange} />
                                <p className="error"> {errors && errors.first_name && errors.first_name?.message} </p>

                            </div>

                            <div className='form-group'>
                                <input type='text' className='form-control' id='last_name' name='last_name' value={last_name} placeholder='Last Name' {...register('last_name')} onChange={onChange}/>
                                <p className="error"> {errors && errors.last_name?.message} </p>

                            </div>
                        </div>

                        <div className="form-group-class">
                            <div className='form-group'>
                                <input type='email' className='form-control' id='email' name='email' value={email} placeholder='Email' {...register('email')} onChange={onChange} />
                                <p className="error"> {errors && errors.email?.message} </p>

                            </div>

                            <div className='form-group'>
                                <input type={passwordShown ? "text" : "password"} className='form-control' id='password' name='password' value={password} placeholder={'Password'} {...register('password')}  onChange={onChange}/>
                                <i onClick={togglePasswordVisiblity}>{eye}</i>
                                <p className="error"> {errors && errors.password?.message} </p>

                            </div>
                        </div>

                        <div className='form-group form-group-class'>
                            <input type='date' className='form-control single-line dob' id='dob' name='dob' value={dob} placeholder='Date of Birth DD-MM-YYYY' {...register('dob')} onChange={onChange}/>
                            <p className="error"> {errors && errors.dob?.message} </p>

                        </div>

                        <div className="form-group-class">
                            <div className='form-group'>
                                <input type='text' className='form-control' id='country_code' name='country_code' value={country_code} placeholder='Mobile Country Code' {...register('country_code')} onChange={onChange}/>
                                <p className="error"> {errors && errors.country_code?.message} </p>

                            </div>

                            <div className='form-group'>
                                <input type='text' className='form-control' id='mobile_phone' name='mobile_phone' value={mobile_phone} placeholder='Mobile Number' {...register('mobile_phone')} onChange={onChange}/>
                                <p className="error"> {errors && errors.mobile_phone?.message} </p>

                            </div>
                        </div>

                        <div className="form-group-class">
                            <div className='form-group'>
                                <input type='text' className='form-control' id='country' name='country' value={country} placeholder='Current Country' {...register('country')} onChange={onChange}/>
                                <p className="error"> {errors && errors.country?.message} </p>

                            </div>

                            <div className='form-group'>
                                <input type='text' className='form-control' id='city' name='city' value={city} placeholder='Current City' {...register('city')} onChange={onChange}/>
                                <p className="error"> {errors && errors.city?.message} </p>

                            </div>
                        </div>

                        <div className="form-group-class group">
                            <div className='form-group'>
                                <input type='text' className='form-control single-line' id='university' name='university' {...register('university')} value={university} placeholder='University' onChange={onChange}/>
                                <p className="error"> {errors && errors.university?.message} </p>

                            </div>
                            <div className="sub-group">
                                <div className='form-group'>
                                    <input type='text' className='form-control' id='university-country' name='university_country' {...register('university_country')} value={university_country} placeholder='University Country' onChange={onChange}/>
                                    <p className="error"> {errors && errors.university_country?.message} </p>

                                </div>

                                <div className='form-group'>
                                    <input type='text' className='form-control' id='university-city' name='university_city' {...register('university_city')} value={university_city} placeholder='University City' onChange={onChange}/>
                                    <p className="error"> {errors && errors.university_city?.message} </p>

                                </div>
                            </div>
                        </div>
                        
                        {typeId === 3 &&
                            <div className="form-group-class group">
                                <div className='form-group'>
                                    <input type='text' className='form-control single-line' {...register('job')} id='job' name='job' value={job} placeholder='Current Job' onChange={onChange}/>
                                    <p className="error"> {errors && errors.job?.message} </p>

                                </div>
                                <div className="sub-group">
                                    <div className='form-group'>
                                        <input type='text' className='form-control' id='job-country' name='job_country' value={job_country} {...register('job_country')} placeholder='Job Country' onChange={onChange}/>
                                        <p className="error"> {errors && errors.job_country?.message} </p>

                                    </div>

                                    <div className='form-group'>
                                        <input type='text' className='form-control' id='job-city' name='job_city' value={job_city} {...register('job_city')} placeholder='Job City' onChange={onChange}/>
                                        <p className="error"> {errors && errors.job_city?.message} </p>

                                    </div>
                                </div>
                            </div>
                        }
                        
                        <div className='form-group form-group-class single-line'>
                            <button type='submit' className='register-btn' onClick={fs_register}>Create Account</button>
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