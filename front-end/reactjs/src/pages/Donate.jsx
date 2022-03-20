import DonationTag from "../components/DonationTag";
import BankTransfer from "../assets/images/bank-transfer.png";
import Benevity from "../assets/images/benevity.png";
import GoFundMe from "../assets/images/go-fund-me.png";
import PayPal from "../assets/images/paypal.png";
import "../style/donate.css";
import DonationInfo from "../components/DonationInfo";
import SuccessStories from "../components/SuccessStories";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import WireTransfer from "../components/WireTransfer";


const Donate = () => {

    const navigate = useNavigate();
    const redirectToRecordsPage = () => {
        navigate('/records');
    }

    const [showWireTransferTag, setShowWireTransferTag] = useState(false);
    const onClick = () => {
        setShowWireTransferTag(true);
    }

    return (
        <div className="donations">
            <div className="donation-title donation-row">
                <h1>Support students through your donations!</h1>
                <h5>Methods of Payment</h5>
            </div>
            <div className="donation-row">
                <DonationTag  className="donation-tag" text="Direct Bank Wire Transfer" image={BankTransfer} onClick={onClick}/> 
                <DonationTag className="donation-tag" image={PayPal}/>
            </div>

            <div className="donation-row">
                <DonationTag className="donation-tag" image={GoFundMe}/>
                <DonationTag className="donation-tag" image={Benevity}/>
            </div>

            <div className="donation-info doantion-row">
                <DonationInfo />
            </div>

            <div className="success-stories donation row">
                <Button text="View All Success Stories & Records" className="success-stories-button" onClick={redirectToRecordsPage}/>
                <SuccessStories />
            </div>

            {showWireTransferTag ? 
                <WireTransfer />:
                null
            }
        </div>
    )
}

export default Donate