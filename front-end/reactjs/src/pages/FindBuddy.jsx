import image from '../assets/images/vision.png';
import Button from '../components/Button';
import '../style/find-buddy.css'
import '../style/contact-tag.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

const Team = () => {

  const navigate = useNavigate()
  const redirect = () => {
      navigate('/records');
  }

  const redirectToChat = (mentor) => {
    navigate('/chat');
}


    const [type, setType] = useState();
    const [user, setUser] = useState();

    const [students, setStudents] = useState();
    const [mentors, setMentors] = useState();

    const getUserApi = "http://localhost:8080/users/"

    const getUser = async () => {
        const token = localStorage.getItem("user");
        await axios.get(getUserApi, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
            setType(response.data.type)
            setUser(response.data)
        }).catch (err => {
            console.log(err)
        });
    }

    const getStudentApi = "http://localhost:8080/users/students"
    const getStudents = async () => {
        await axios.get(getStudentApi)
        .then(response => {
            setStudents(response.data)
        }).catch (err => {
            console.log(err)
        });
    }

    const getMentorsApi = "http://localhost:8080/users/mentors"
    const getMentors = async () => {
        await axios.get(getMentorsApi)
        .then(response => {
            setMentors(response.data)
        }).catch (err => {
            console.log(err)
        });
    }

    useEffect(() => { 
        getUser();
        getStudents();
        getMentors();
    }, []);    


  if (localStorage.getItem('user') == null) {
    return (
      <h1 className="dashboard">Please Register or Login to access this page</h1>
    )} else {
        return (
            <div className='find-buddy'>
            
            <div className='header'>
                <p className='title'>Buddies</p>
                <p className='title-subheader'>Many of us remember their first day abroad as one of the most interesting yet challenging days in our lives; embarking on a new journey yet having tons of questions and concerns and above all the feel of being a stranger. If you have been abroad for a while and you have already settled in and figured the answers for most of the questions you thought about on your first day, how about you be that person you wished you had on the first day and lend a hand for a new student? </p>
            </div>

            <div className='buddies'>
                <div className='buddies-title'>
                    <p className='title'>Kaffi Buddies</p>
                </div>

                <div className='buddy-pictures'>
                    {user && type =='student' ? 
                        <>
                            {mentors && Array.isArray(mentors) && mentors.map((mentor) => {
                                return(
                                    <>
                                    <div className='contact-tag' id={mentor.id}>
                                        <div className='contact-tag-image'>
                                            <img className='contact-tag-profile-picture' src={mentor.profile_picture} alt='profile_picture'/>            
                                        </div>
                                        <div className='contact-tag-text'>
                                            <div>
                                                <p className='contact-tag-name'>{mentor.first_name + ' ' + mentor.last_name}</p>
                                            </div>
                                            <div>
                                                <p className='contact-tag-title'>{mentor.country}</p>
                                                <p className='contact-tag-role'>Mentor</p>  
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })}
                        </>
                        :<>
                            {students && Array.isArray(students) && students.map((student) => {
                                return(
                                    <>
                                     <div className='contact-tag' id={student.id}>
                                        <div className='contact-tag-image'>
                                            <img className='contact-tag-profile-picture' src={student.profile_picture} alt='profile_picture'/>            
                                        </div>
                                        <div className='contact-tag-text'>
                                            <div>
                                                <p className='contact-tag-name'>{student.first_name + ' ' + student.last_name}</p>
                                            </div>
                                            <div>
                                                <p className='contact-tag-title'>{student.country}</p>
                                                <p className='contact-tag-role'>Student</p>  
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })}
                        </>
                    }
                </div>

                <Button className='contact-tag-button' onClick={redirectToChat} text='Chat with Buddies'/>

            </div>

            <div className='vision'>
                <div className='vision-text'>
                <p className='title'>Our Vision</p>
                <p className='text'>At Kaffi, we believe that education is the best form of investment for the future of an individual, a family and a community.  Our goal is to remove financial obstacles for students and make it possible for them to focus on the educational path they have already invested a lot in. This in return will help create educated young leaders, with an international exposure, who will move Lebanon forward.</p>
                </div>

                <div className='vision-picture'>
                <img  className='team-vision-image' src={image} alt='logo'/>            

                </div>
            </div>

            <div className='mission'>
                <div className='mission-text'>
                <p className='title'>Our Mission</p>
                <p className='text'>Amid the current economic crisis and the unresolved dollar-lira problem, we believe that the best way forward for many Lebanese families is investing in their youth’s education abroad. This will prevent these students from losing their current enrollment, allow them to eventually land better jobs and thus help their families and community prosper. Our priority at Kaffi is preventing the scenarios where students abroad are forced to go back, before completing their studies, due to financial hardships.</p>
                <Button onClick={redirect} text="View Our Records" className='mission-button'/>
            </div>
            </div>

            </div>
        )
    }
}

export default Team