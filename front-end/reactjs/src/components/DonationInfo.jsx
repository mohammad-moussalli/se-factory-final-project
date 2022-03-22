import { useNavigate } from 'react-router-dom';
import Button from './Button';
import '../style/donation-info.css';


const DonationInfo = () => {


  const navigate = useNavigate();
  const redirect = () => {
      navigate('/faq');
  }
  return (
    <div className='donation-info'>

      <h1>With 30 donations of €10, you can secure a student's expenses for a month!</h1>
      <h3>Check our scholarship programs to learn more about the support provided and the programs details</h3>
      <Button className='donation-info-button' onClick={redirect}  text="Scholarship Program"/>

    </div>
  )
}

export default DonationInfo