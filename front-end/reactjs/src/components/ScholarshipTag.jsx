import '../style/scholarship-tag.css';

const ScholarshipTag = ({name, cycle, start_date, deadline, results}) => {

  return (
    <div className='scholarship-tag'>
        <div className='scholarship-tag-row1'>
            <h2>{cycle} Cycle Deadline</h2>
        </div>

        <div className='scholarship-tag-row2'>
            <div className='scholarship-tag-row2-col1'>
                <h6>Program</h6>
                <h6>Kaffi-{name}</h6>
            </div>

            <div className='scholarship-tag-row2-col2'>
                <h6>Application submission opens</h6>  
                <h6>{start_date}</h6>
            </div>

            <div className='scholarship-tag-row2-col3'>
                <h6>Deadline to submit your application</h6>
                <h6>{deadline}</h6>
            </div>

            <div className='scholarship-tag-row2-col4'>
                <h6>Announcing Results</h6>
                <h6>{results}</h6>  
            </div>
           

        </div>
    </div>
  )
}

export default ScholarshipTag