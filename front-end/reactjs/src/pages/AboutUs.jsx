import Button from "../components/Button";
import img1 from '../assets/images/about-us1.png';
import img2 from '../assets/images/about-us2.png';
import img3 from '../assets/images/about-us3.png';
import img4 from '../assets/images/about-us4.png';
import { useNavigate } from 'react-router-dom';

import '../style/about-us.css';

const AboutUs = () => {

  
  const navigate = useNavigate()
  const redirect= () => {
    navigate('/team');
  }
  return (
    <div className='about-us'>
      <p className="about-us-title">About Kaffi</p>
      <div className='about-us-row1'>
        <div className='about-us-row1-col1'>
          <p className="about-us-text">Kaffi , the Arabic for "Keep Going", is an independent nonprofit organization founded to ease the burden on the shoulders of the students and allow them to carry on their education. We at Kaffi, know very well the situation of the Lebanese students abroad as most of us have been through this before. We also know that the current economic crisis affecting Lebanon is jeopardizing these students' chance of continuing their education.  This has driven us to take immediate action and do our best to help! </p>
          <Button className="team-button" text='Meet the Team' onClick={redirect}/>
        </div>

        <div className='about-us-row1-col2'>
          <iframe src="https://www.youtube.com/embed/3zdHooYL68s" />
        </div>

      </div>

      <div className='about-us-row2'>

          <div className='about-us1'> 
            <img src={img1} alt="logo"></img>
            <p className='steps-apply-text'>Create partnerships, collect donations and scholarship contributions</p>
          </div>

          <div className='about-us2'> 
            <img src={img2} alt="logo"></img>
            <p className='steps-apply-text'>Support students through their journey by overcoming the financial obstacle </p>
          </div>

          <div className='about-us3'> 
            <img src={img3} alt="logo"></img>
            <p className='steps-apply-text'>Inspire and help students reach high levels of achievement </p>
          </div>

          <div className='about-us4'> 
            <img src={img4} alt="logo"></img>
            <p className='steps-apply-text'>Create a community that gives back and eventually strengthens Lebanon</p>
          </div>

      </div>

      <div className='about-us-row3'>

        <div className='about-us-row3-col1'>
          <p className="about-us-title">Why Donate To Kaffi?</p>
          <p className="about-us-text">In the past year, the Lebanese currency has lost over 90% of its value amid an ongoing economic crisis. Banks in Lebanon have put severe restrictions on the depositors' money, causing many Lebanese students abroad to lose the financial support their parents were providing them. As this crisis is expected to last, Kaffi was founded to push forward long-term solutions through supporting the Lebanese youth abroad.</p>
        </div>

        <div className='about-us-row3-col2'>
          <iframe src="https://www.youtube.com/embed/t3hKhiSLQEA" />
        </div>
      </div>

    </div>
  )
}

export default AboutUs