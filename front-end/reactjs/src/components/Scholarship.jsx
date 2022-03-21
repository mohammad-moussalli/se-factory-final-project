import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import ScholarshipTag from './ScholarshipTag';
import boost from '../assets/images/KaffiBoost.png'
import launch from '../assets/images/KaffiLaunch.png'

const Scholarship = () => {

    const [scholarshipsWithCycle, setScholarshipsWithCycle] = useState(null)
    const scholarshipsApi = "http://localhost:8080/scholarships/get-scholarships-cycle"

    useEffect( () => {
        axios.get(scholarshipsApi)
        .then(response => {
            setScholarshipsWithCycle(response.data.response)})
        .catch(err => {
            console.log(err)
        });
    }, [])

    if (!scholarshipsWithCycle){
       return <Spinner/>
    } else{
        return (
            <div>
                <div>
                    {scholarshipsWithCycle.map((scholarshipWithCycle) => {
                        console.log(scholarshipWithCycle.scholarship.id)
                        return(
                            
                            <div key={scholarshipWithCycle.scholarship.id}>
                                {scholarshipWithCycle.scholarship.name === "boost" ?
                                <ScholarshipTag image={boost}
                                                name={scholarshipWithCycle.scholarship.name}
                                                title='Scholarships for Student Expenses' 
                                                text ='Tuition in Western Europe is generally less of an issue compared to living expenses. The goal is to boost and support these students to remain in the country of study.'
                                                start_date={scholarshipWithCycle.cycle.start_date} 
                                                deadline={scholarshipWithCycle.cycle.deadline} 
                                                results={scholarshipWithCycle.cycle.results} />

                                :<ScholarshipTag image= {launch}
                                                name={scholarshipWithCycle.scholarship.name}
                                                title='Scholarships For University Tuition' 
                                                text ='Many students, mainly in Eastern Europe, are struggling with expensive tuition, especially in medical schools. The goal is to support the students most in need pay their tuition fees.'
                                                start_date={scholarshipWithCycle.cycle.start_date} 
                                                deadline={scholarshipWithCycle.cycle.deadline} 
                                                results={scholarshipWithCycle.cycle.results} />
                                }
                            </div>  
                        )
                    })}
                </div>
            </div> //accordion
            
        )
    }
}

export default Scholarship

