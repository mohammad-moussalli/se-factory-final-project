import img1 from '../assets/images/HelpfulTips.png';
import '../style/helpful-tips.css';

const HelpfulTips = () => {
  return (
    <div className='helpful-tips'>
        <div className='helpful-tips-title'>

            <h1>Helpful Tips</h1>
            <img src={img1} alt="logo"></img>

        </div>

        <h5>Please Remember, we are here to help you so please help us help you!</h5>
        <ul>
            <li>Make sure all information provided is accurate</li>
            <li>When providing financial information, please make sure you request the minimum amount needed that can help you keep going</li>
            <li>By providing realistic numbers, you increase your chances of getting support, as well as the chances for others. Funds are limited, and we hope to help the largest number of students in need!</li>

        </ul>
    </div>
  )
}

export default HelpfulTips