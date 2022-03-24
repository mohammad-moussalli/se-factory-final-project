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
            <div className="donation-title donation-row1">
                <p className="donation-title1">Support students through your donations!</p>
                <p className="donation-title2">Methods of Payment</p>
            </div>

            <div className="donation-tags">
                <div className="donation-row donation-row2">
                    <DonationTag  className="donation-tag col1-tag" text="Direct Bank Wire Transfer" image={BankTransfer} onClick={onClick}/> 
                    <DonationTag className="donation-tag col2-tag" image={PayPal}/>
                </div>

                <div className="donation-row donation-row3">
                    <DonationTag className="donation-tag col1-tag" image={GoFundMe}/>
                    <DonationTag className="donation-tag col2-tag" image={Benevity}/>
                </div>
            </div>
            <div className="donation-info doantion-row">
                <DonationInfo />
            </div>

            <div className="donate-success-stories donation-row4">
                <div className="donate-success-stories-row1">
                    <p className="donate-success-stories-title">Check the impact of your support from students success stories</p>
                    <Button text="View All Success Stories & Records" className="success-stories-button" onClick={redirectToRecordsPage}/>
                </div>
                <div className="donate-success-stories-row2">
                    <SuccessStories />
                </div>
            </div>

            {showWireTransferTag ? 
                <WireTransfer />:
                null
            }
        </div>
    )
}

export default Donate