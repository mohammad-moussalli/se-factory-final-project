
import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from './Spinner';



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
                        return(
                            <div key={scholarshipWithCycle.id}>
                                {scholarshipWithCycle.scholarship.name}
                                {scholarshipWithCycle.cycle.cycle}
                                {scholarshipWithCycle.cycle.start_date}
                                {scholarshipWithCycle.cycle.deadline}
                                {scholarshipWithCycle.cycle.results}
                            </div>  
                        )
                    })}
                </div>
            </div>
            
        )
    }

}

export default Scholarship

