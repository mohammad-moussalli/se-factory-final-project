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

    const [reports, setReports] = useState(null)
    const reportsApi = "http://localhost:8080/reports"

    const getSuccessStory = async () => {
        await axios.get(successStoriesApi)
        .then((response) => {
            setSuccessStories(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getReports = async () => {
        await axios.get(reportsApi)
        .then((response) => {
            setReports(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() => { getSuccessStory();
                        getReports() 
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
                                    <SuccessStory story={successStory.story} name={successStory.name} picture={successStory.picture} />
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
                        {Array.isArray(reports) && reports.map((report) => {
                            return(
                                <div className='cycle-report'>
                                    <img className='report-cycle-image' src={report.screenshot} alt="logo"></img>
                                    {/* <Link text={`View ${report.title} Records`} className="report-cycle-button"/> */}
                                    <div className='report-cycle-button'><a className='href-records' href={report.link} target="_blank"> View {report.title} Details </a></div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )}
}

export default RecordsPage