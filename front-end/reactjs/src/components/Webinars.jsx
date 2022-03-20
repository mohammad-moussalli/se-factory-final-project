import { useEffect, useState } from "react"
import axios from 'axios';
import Spinner from './Spinner';

const Webinars = () => {

    const [webinars, setWebinars] = useState(null)
    const [webinarUrl, setWebinarUrl] = useState(null)
    const [webinarQuestions, setWebinarQuestions] = useState(null)
    const webinarsApi = "http://localhost:8080/webinars/"
    const webinarQuestionsApi = "http://localhost:8080/webinar-questions/webinar/"

    const handleOnCountryClick = (async (webinarId, webinars) => {
        setWebinarUrl(webinars.find(webinar => webinar.id == webinarId).video_url)
        await axios.get(webinarQuestionsApi + webinarId)
        .then(response => {
            setWebinarQuestions(response.data)})
        .catch(err => {
            console.log(err)
        });
    })


    useEffect( async () => {
        await axios.get(webinarsApi)
        .then(response => {
            setWebinars(response.data)
            handleOnCountryClick(response.data[0].id, response.data)
        })
        .catch(err => {
            console.log(err)
        });
    }, [])

    if (!webinars){
        return <Spinner/>
     } else{
         return (
             <div>
                 {webinars.map((webinar)=> {
                 return <button key={webinar.id} onClick={() => handleOnCountryClick(webinar.id, webinars)}>{webinar.country}</button>
                 })}

                {webinarUrl &&
                 <div>
                    <iframe src={webinarUrl} />
                 </div>}
                
 
                 <div>
                     {Array.isArray(webinarQuestions) && webinarQuestions.map((webinarQuestion) => {
                         return(
                             <div key={webinarQuestion.id}>
                                 {webinarQuestion.question}
                                 {webinarQuestion.answer}
                             </div>  
                         )
                     })}
                 </div>
             </div>
         )}
}

export default Webinars