import { useState } from "react"
import { Link } from "react-router-dom";   
import authService from "../features/auth/authService";

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
    })

    const [typeId, setTypeId] = useState(2);

    const { first_name, last_name, email, password, dob, country_code, mobile_phone, country, city, profile_picture} = formData
    
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

    return (
        <>
            <section className='heading'>
                <h1>
                    Create Account
                </h1>
                <button>Register with Google</button>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <select name="type" id="type" onChange={handleType}>
                        <option value="2">Student</option>
                        <option value="3">Mentor</option>
                    </select>

                    <div className='form-group'>
                        <input type='text' className='form-control' id='first_name' name='first_name' value={first_name} placeholder='Enter your First Name' onChange={onChange}/>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control' id='last_name' name='last_name' value={last_name} placeholder='Enter your First Name' onChange={onChange}/>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control' id='email' name='email' value={email} placeholder='Enter your Email' onChange={onChange}/>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control' id='password' name='password' value={password} placeholder='Enter your Password' onChange={onChange}/>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control' id='dob' name='dob' value={dob} placeholder='Enter your Date of Birth' onChange={onChange}/>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control' id='country_code' name='country_code' value={country_code} placeholder='Enter the Country Code' onChange={onChange}/>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control' id='mobile_phone' name='mobile_phone' value={mobile_phone} placeholder='Enter your Mobile Number' onChange={onChange}/>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control' id='country' name='country' value={country} placeholder='Enter your current Country' onChange={onChange}/>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control' id='city' name='city' value={city} placeholder='Enter your current City' onChange={onChange}/>
                    </div>
                    {typeId === 2 &&
                    <div className='form-group'>
                        <input type='text' className='form-control' id='profile_picture' name='profile_picture' value={profile_picture} placeholder='Upload a Profile Picture' onChange={onChange}/>
                    </div>
                    }
                    
                    <div className='form-group'>
                        <button type='submit' className='btn'>Submit</button>
                    </div>

                    <div className='signin'>
                        <p>Already have an account?</p>
                        <Link to="/login">Login</Link>
                    </div>

                </form>
            </section>

        </>
    )
}

export default Register