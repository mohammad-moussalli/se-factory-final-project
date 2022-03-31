import { useNavigate } from 'react-router-dom';
import Button from './Button';
import '../style/donation-info.css';

const DonationInfo = () => {

  const navigate = useNavigate();
  const redirect = () => {
      navigate('/scholarships');
  }
  return (
    <div className='donation-info'>
      <div className='donation-info-content'>
        <p className='donation-info-title'>With 30 donations of €10, you can secure a student's expenses for a month!</p>
        <p className='donation-info-text'>Check our scholarship programs to learn more about the support provided and the programs details</p>
        <Button className='donation-info-button' onClick={redirect}  text="Scholarship Program"/>
      </div>
    </div>
  )
}

export default DonationInfo