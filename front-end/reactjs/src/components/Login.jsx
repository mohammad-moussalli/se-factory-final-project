import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import '../style/login.css';
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "@firebase/auth";

function Login() {
      
  const auth = getAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

const fs_login = async () => {

    const responseFromAuth = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userId = responseFromAuth.user.uid;
    
    localStorage.setItem(
      "fs_user",
      JSON.stringify({
        email: email,
        uid: userId,
      })
    );
}

  return (
    <div className='login'>
      <div className='login-form'>
      <section className='login-heading'>
        <p className='login-title'>
           Login
        </p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='login-form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='login-form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' onClick={fs_login} className='login-btn'>
              Submit
            </button>
          </div>
        </form>
      </section>
      </div>
    </div>
  )
}

export default Login
