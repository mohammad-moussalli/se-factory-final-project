import '../style/scholarship-tag.css';

const ScholarshipTag = ({name, cycle, start_date, deadline, results}) => {

  return (
    <div className='scholarship-tag'>
        <div className='scholarship-tag-row1'>
            <p className='cycle-name'>{cycle} Cycle Deadline</p>
        </div>

        <div className='scholarship-tag-row2'>
            <div className='scholarship-tag-row2-col1 col'>
                <p className='cycle-details1'>Program</p>
                <p className='cycle-details2'>Kaffi-{name}</p>
            </div>

            <div className='scholarship-tag-row2-col2 col'>
                <p className='cycle-details1'>Application submission opens</p>  
                <p className='cycle-details2'>{start_date}</p>
            </div>

            <div className='scholarship-tag-row2-col3 col'>
                <p className='cycle-details1'>Deadline to submit your application</p>
                <p className='cycle-details2'>{deadline}</p>
            </div>

            <div className='scholarship-tag-row2-col4 col'>
                <p className='cycle-details1'>Announcing Results</p>
                <p className='cycle-details2'>{results}</p>  
            </div>
           

        </div>
    </div>
  )
}

export default ScholarshipTag