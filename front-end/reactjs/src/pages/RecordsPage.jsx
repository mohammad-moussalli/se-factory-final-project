import React from 'react'
import SuccessStory from '../components/SuccessStory'
import Records from '../components/Records'
import '../style/records-page.css'
import image from '../assets/images/CycleReports.png'
import Button from '../components/Button'
import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';

const RecordsPage = () => {

    const [successStories, setSuccessStories] = useState(null)

    const successStoriesApi = "http://localhost:8080/stories"

    useEffect(async () => {
        await axios.get(successStoriesApi)
        .then((response) => {
            setSuccessStories(response.data)
        })
        .catch(err => {
            console.log(err)
        });
        }, [])

    if (!successStories){
        return <Spinner/>
    }else{
        return (
            <div className='records'>
            
                <div className='records-header'>
                    <p className='records-title'>Records</p>
                    <p className='records-text'>The Annual and Cycle Reports provide information about Kaffi's current programs, statistics, financial reports, activities and many more.</p>
                </div>

                <div className='records-tag'>
                    <Records />    
                </div>

                <div className='success-story-tag'>
                    <div className='success-story-title'>
                        <p>Students Success Stories!</p>
                    </div>
                    <div className='success-story-tags'> 
                        {Array.isArray(successStories) && successStories.map((successStory) => {
                            return(
                                <>
                                    <SuccessStory story={successStory.story} name={successStory.name} />
                                </>
                            )
                        })}
                    </div>
                </div>

                <div className='reports'>
                    <div className='reports-row1'>
                        <p className='reports-title'>Latest Reports</p>
                    </div>
                    <div className='reports-row2'>
                        <div className='cycle-report'>
                            <img className='report-cycle-image' src={image} alt="logo"></img>
                            <Button text="View Fall 2022 Records" className="report-cycle-button"/>
                        </div>
                        <div className='cycle-report'>
                            <img className='report-cycle-image' src={image} alt="logo"></img>
                            <Button text="View Spring 2022 Records" className="report-cycle-button"/>
                        </div>
                    </div>
                </div>
            </div>
        )}
}

export default RecordsPage