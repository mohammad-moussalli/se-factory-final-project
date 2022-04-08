import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Spinner from './Spinner';

import { useEffect, useState} from 'react'
import axios from 'axios';

const Donut = () => {

  const [scholarshipRecords, setScholarshipRecords] = useState(null)
  const getScholarshipRecordsApi = "http://localhost:8080/applications/scholarship/records"

  useEffect( async () => {
      await axios.get(getScholarshipRecordsApi)
      .then(response => {
          setScholarshipRecords(response.data.response)
      })
      .catch(err => {
          console.log(err)
      });
  }, [])

  const [scholarships, setScholarships] = useState(null)
  const getScholarshipsApi = "http://localhost:8080/scholarships";

  useEffect( async () => {
      await axios.get(getScholarshipsApi)
      .then(response => {
          setScholarships(response.data)})
      .catch(err => {
          console.log(err)
      });
  }, [])

  const [cycleId, setCycleId] = useState(null)

  const handleType = (val) => {
    const id = parseInt(val.target.value);
    setCycleId(id);
  }

  let applicants = 0;
  let launch_applicants = 0;
  let boost_applicants = 0;

  if(scholarshipRecords){
      for( let i = 0; i <scholarshipRecords.length; i++){
          applicants += scholarshipRecords[i].cycle_applicants
          if(scholarshipRecords[i].name =='Launch'){
              launch_applicants = scholarshipRecords[i].cycle_applicants
          }
          if(scholarshipRecords[i].name =='Boost'){
              boost_applicants = scholarshipRecords[i].cycle_applicants
          }
      }
  }

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  
  datasets: [
    {
      label: '# of applicants',
      data: [launch_applicants/applicants, boost_applicants/applicants],
      backgroundColor: [
        'rgba(0, 126, 195, 1)',
        'rgba(27, 8, 159, 1)',
      ],
      borderColor: [
        'rgba(0, 126, 195, 1)',
        'rgba(27, 8, 159, 1)',
      ],
    },
  ],
}

    return <div>
        <div className='donut-chart'>
            <Doughnut data={data}/>
        </div>
    </div>
}


export default Donut