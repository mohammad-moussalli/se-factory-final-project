import { useEffect, useState } from "react"
import axios from 'axios';
import Spinner from './Spinner';
import * as React from 'react';
import '../style/webinars.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

    // const Country = () => {
    //     const [country, setCountry] = useState();
     
    //     return <h2 onClick={() => setCountry(country)}>Applying to Grad School in {country} - Important Steps</h2>;
    //  }

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
            <div className="webinars">

                <div className="webinars-title">

                    <h1>Kaffi's Latest Webinar</h1>
                    <h3>Select the country to preview it’s corresponding webinar and useful information</h3>
                </div>

                {webinarUrl &&
                <div>
                    
                    <div className="webinar-video-country">
                        <div className="webinar-video">
                            <iframe title = 'webinarl-video'src={webinarUrl} />
                        </div>
                        <div className="webinar-country">
                            {webinars.map((webinar)=> {
                                return <button className="webinar-country-button" key={webinar.id} onClick={() => handleOnCountryClick(webinar.id, webinars)}>{webinar.country}</button>
                            })}

                        </div>
                    </div>
                
                    {/* <div>
                    <Accordion>
                        {Array.isArray(webinarQuestions) && webinarQuestions.map((webinarQuestion) => {
                            return(
                                <div>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${webinarQuestion.id}a-content`} id={`panel${webinarQuestion.id}a-header`}>
                                        <Typography>{webinarQuestion.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{webinarQuestion.answer}</Typography>
                                    </AccordionDetails>
                                </div>
                            )
                        })}
                        </Accordion> 
                    </div> */}
                 </div>
                }
            </div>
         )}}

export default Webinars