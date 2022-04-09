import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../style/dashboard.css'
import axios from "axios";
import { useEffect, useState } from "react";

const ScholarshipForms = () => {

    const [id, setId] = useState();
    const [type, setType] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [profile_picture, setProfilePicture] = useState();
    const [university, setUniversity] = useState();
    const [createdAt, setCreatedAt] = useState();
    
    const [student_degree, setStudentDegree] = useState();
    const [student_major, setStudentMajor] = useState();
    const [field_of_study, setFieldOfStudy] = useState();
    
    const [cycle, setCycle] = useState();
    const [degree, setDegree] = useState();
    const [major, setMajor] = useState();
    const [semester_tuition_fee, setSemesterTuitionFee] = useState();
    const [monthly_allowance, setMonthlyAllowance] = useState();
    
    const [mentor_degree, setMentorDegree] = useState();
    const [mentor_major, setMentorMajor] = useState();
    const [study_field, setStudyField] = useState();
    const [work_field, setWorkField] = useState();
    const [company, setCompany] = useState();
    const [position, setPosition] = useState();


    const getUserApi = "http://localhost:8080/users/"

    const getUser = async () => {
        const token = localStorage.getItem("user")
        await axios.get(getUserApi, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
            setId(response.data.id)
            setFirstName(response.data.first_name)
            setLastName(response.data.last_name)
            setCountry(response.data.country)
            setCity(response.data.city)
            setUniversity(response.data.university)
            setType(response.data.type)
            setCreatedAt(response.data.createdAt)
            setProfilePicture(response.data.profile_picture)
        }).catch (err => {
            console.log(err)
        });
    }

    useEffect(() => { getUser() }, []);

    const [scholarshipsWithCycle, setScholarshipsWithCycle] = useState(null)
    const scholarshipsApi = "http://localhost:8080/scholarships/get-scholarships-cycle"
    
        const getScholarship = async () => {
        await axios.get(scholarshipsApi)
        .then(response => {
            setScholarshipsWithCycle(response.data.response)})
        .catch(err => {
            console.log(err)
        });
    }
    useEffect(() => { getScholarship() }, []);

    const scholarshipCycleApi = "http://localhost:8080/scholarships/get-cycle/"

    const [boostCycle, setBoostCycle] = useState(null)
    const getBoostCycle = async () => {
        await axios.get(scholarshipCycleApi + "Boost")
        .then(response => {
          setBoostCycle(response.data.response)})
        .catch(err => {
            console.log(err)
        });
    }

    const [launchCycle, setLaunchCycle] = useState(null)
    const getlaunchCycle = async () => {
        await axios.get(scholarshipCycleApi + "Launch")
        .then(response => {
          setLaunchCycle(response.data.response)})
        .catch(err => {
            console.log(err)
        });
    }

    useEffect(() => { getBoostCycle() }, []);
    useEffect(() => { getlaunchCycle() }, []);

    const handleCycle = (val) => {
        const target_id = parseInt(val.target.value);
        setCycle(target_id);
    }
    const createScholarshipApplicationApi = 'http://localhost:8080/applications/scholarship'
    const createScholarship = async () => {
        const token = localStorage.getItem("user")
        axios.post(createScholarshipApplicationApi, {user_id: id, cycle_id: cycle, degree: degree, major: major, semester_tuition_fee: semester_tuition_fee, monthly_allowance: monthly_allowance} ,
        { headers: {"Authorization" : `Bearer ${token}`} } )
    }

    const createStudentBuddyApi = "http://localhost:8080/applications/student-buddy"
    const createStudentBuddyApplication = async () => {
        const token = localStorage.getItem("user")
        axios.post(createStudentBuddyApi, {user_id: id, degree: student_degree, major: student_major, field: field_of_study} ,
        { headers: {"Authorization" : `Bearer ${token}`} } )
    }

    const createMentorBuddyApi = "http://localhost:8080/applications/mentor-buddy"
    const createMentorBuddyApplication = async () => {
        const token = localStorage.getItem("user")
        axios.post(createMentorBuddyApi, {user_id: id, degree: mentor_degree, major: mentor_major, study_field: study_field, work_field: work_field, company: company, position: position} ,
        { headers: {"Authorization" : `Bearer ${token}`} } )
    }

    if (localStorage.getItem('user') === null) {
        return (
          <h1 className="dashboard">Please Register or Login to access this page</h1>
        )} else {
        return ( 
            <div className='dashboard-component'>
                <div className='dashboard-sidebar'>
                    <div className='dashboard-profile-picture'>
                        <img className='dashboard-profile-image' src={profile_picture} alt='profile'/>
                    </div>
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
                        <p className='dashboard-welcome-subtitle'>Please Submit an Application</p>

                    </div>

                    <div className='dashboard-update-form'>
                        <div className="accordion">
                        { type === 'student' ? 
                            <>
                              <Accordion className='accordion-part'>
                                  <AccordionSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />} aria-controls={`panel1a-content`} id={`panel1a-header`}>
                                      <Typography className="dashboard-form-title">Scholarship Application</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails className="accordion-details">
                                      <form className='UpdateUser' onSubmit={createScholarship}>
                                          <select className="user-type form-control single-line" name="scholarship" id="scholarship" onChange={handleCycle}>
                                              <option className="user-type-option" value="" disabled selected hidden>Select Scholarship</option>
                                              {scholarshipsWithCycle.map((scholarshipWithCycle) => {  
                                                  return(
                                                      <>
                                                          {boostCycle && (boostCycle.id === scholarshipWithCycle.cycle.id)  &&  <option className="user-type-option" value={scholarshipWithCycle.cycle.id}>{scholarshipWithCycle.scholarship.name} {scholarshipWithCycle.cycle.cycle}</option>}
                                                          {launchCycle && (launchCycle.id === scholarshipWithCycle.cycle.id) && <option className="user-type-option" value={scholarshipWithCycle.cycle.id}>{scholarshipWithCycle.scholarship.name} {scholarshipWithCycle.cycle.cycle}</option>}
                                                      </>
                                                   )
                                              })}
                                          </select>
                                          <input type='text' className='dashboard-form-control' id='degree' name='degree' value={degree} placeholder='Degree' onChange={e => setDegree(e.target.value)}/>
                                          <input type='text' className='dashboard-form-control' id='major' name='major' value={major} placeholder='Major' onChange={e => setMajor(e.target.value)}/>
                                          <input type='text' className='dashboard-form-control' id='semester-tuition-fee' name='semester_tuition_fee' value={semester_tuition_fee} placeholder='Tuition Fee per Semester' onChange={e => setSemesterTuitionFee(e.target.value)}/>
                                          <input type='text' className='dashboard-form-control' id='monthly-allowance' name='monthly_allowance' value={monthly_allowance} placeholder='Monthly Allowance' onChange={e => setMonthlyAllowance(e.target.value)}/>
                                          <div className='dashboard-update-button'>
                                              <button className="updateButton" type="submit">Submit</button> 
                                          </div>
                                      </form>
                                  </AccordionDetails>
                              </Accordion> 

                              <Accordion className='accordion-part'>
                                  <AccordionSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />} aria-controls={`panel1a-content`} id={`panel1a-header`}>
                                      <Typography className="dashboard-form-title">Student Buddy Application</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails className="accordion-details">
                                      <form className='UpdateUser' onSubmit={createStudentBuddyApplication}>
                                          <input type='text' className='dashboard-form-control' id='student_degree' name='student_degree' value={student_degree} placeholder='Degree' onChange={e => setStudentDegree(e.target.value)}/>
                                          <input type='text' className='dashboard-form-control' id='student_major' name='student_major' value={student_major} placeholder='Major' onChange={e => setStudentMajor(e.target.value)}/>
                                          <input type='text' className='dashboard-form-control' id='field_of_study' name='field_of_study' value={field_of_study} placeholder='Field of Study' onChange={e => setFieldOfStudy(e.target.value)}/>
                                          <div className='dashboard-update-button'>
                                              <button className="updateButton" type="submit">Submit</button> 
                                          </div>
                                      </form>
                                  </AccordionDetails>
                              </Accordion> 
                            </>
                              :<Accordion className='accordion-part'>
                                  <AccordionSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />} aria-controls={`panel1a-content`} id={`panel1a-header`}>
                                      <Typography className="dashboard-form-title">Mentor Buddy Application</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails className="accordion-details">
                                      <form className='UpdateUser' onSubmit={createMentorBuddyApplication}>
                                          <input type='text' className='dashboard-form-control' id='mentor_degree' name='mentor_degree' value={mentor_degree} placeholder='Degree' onChange={e => setMentorDegree(e.target.value)}/>
                                          <input type='text' className='dashboard-form-control' id='mentor_major' name='mentor_major' value={mentor_major} placeholder='Major' onChange={e => setMentorMajor(e.target.value)}/>
                                          <input type='text' className='dashboard-form-control' id='study_field' name='study_field' value={study_field} placeholder='Field of Study' onChange={e => setStudyField(e.target.value)}/>
                                          <input type='text' className='dashboard-form-control' id='work_field' name='work_field' value={work_field} placeholder='Field of Work' onChange={e => setWorkField(e.target.value)}/>
                                          <input type='text' className='dashboard-form-control' id='company' name='company' value={company} placeholder='Company' onChange={e => setCompany(e.target.value)}/>
                                          <input type='text' className='dashboard-form-control' id='position' name='position' value={position} placeholder='Position' onChange={e => setPosition(e.target.value)}/>
                                          <div className='dashboard-update-button'>
                                              <button className="updateButton" type="submit">Submit</button> 
                                          </div>
                                      </form>
                                  </AccordionDetails>
                              </Accordion>
                        }
                    </div>
                </div>
            </div>
        </div>
        )}
}

export default ScholarshipForms