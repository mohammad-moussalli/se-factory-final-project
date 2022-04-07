import React from 'react'
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
import image from '../assets/images/bank-transfer.png';
import '../style/wire-transfer.css'
import { useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';

const Donate = () => {

    const navigate = useNavigate();
    const redirectToRecordsPage = () => {
        navigate('/records');
    }

    let donations = 'donations'
    const [showWireTransferTag, setShowWireTransferTag] = useState(false);
    const [showBenevity, setShowBenevity] = useState(false);

    const openWireTransfer = () => {
        donations = 'opaque-donations'
        setShowWireTransferTag(true);
    }

    const closeWireTransfer = () => {
        setShowWireTransferTag(false);
    }

    const openBenevity = () => {
        setShowBenevity(true);

    }

    const closeBenevity = () => {
        setShowBenevity(false);
    }

    const [successStory, setSuccessStory] = useState(null)
    const successStoryApi = "http://localhost:8080/stories/"

    const getSuccessStories = async () => {
        await axios.get(successStoryApi)
        .then((response) => {
            setSuccessStory(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() => { getSuccessStories() }, [])

    if (!successStory){
        return <Spinner/>
    }else{
        return (
        <div className={donations}>
            <div className="donation-title donation-row1">
                <p className="donation-title1">Support students through your donations!</p>
                <p className="donation-title2">Methods of Payment</p>
            </div>

            <div className="donation-tags">
                <div className="donation-row donation-row2">
                    <DonationTag  className="donation-tag col1-tag" text="Direct Bank Wire Transfer" image={BankTransfer} onClick={openWireTransfer}/> 
                    <DonationTag className="donation-tag col2-tag" image={PayPal}/>
                </div>

                <div className="donation-row donation-row3">
                    <DonationTag className="donation-tag col1-tag" image={GoFundMe} link='https://www.gofundme.com/f/kaffi'/>
                    <DonationTag className="donation-tag col2-tag" image={Benevity} onClick={openBenevity}/>
                </div>
            </div>
            <div className="donation-info doantion-row">
                <DonationInfo />
            </div>

            <div className="donate-success-stories donation-row4">
                <div className="donate-success-stories-row1">
                    <p className="donate-success-stories-title">Check the impact of your support from students success stories</p>
                    <Button text="View All Success Stories & Records" className="donate-success-stories-button" onClick={redirectToRecordsPage}/>
                </div>
                <div className="donate-success-stories-row2">
                    {Array.isArray(successStory) && successStory.slice(0, 2).map((items) => {
                        return <SuccessStories story={items.story} name={items.name} picture={items.picture}/>
                    })}
                </div>
            </div>

            {showWireTransferTag ? 
                <div className="wire-transfer">
                    <div className="wire-transfer-content">
                        <div className='wire-transfer-logo'>
                            <div className="wire-transfer-column1">
                                <img className='wiretransfer-image' src={image} alt='Wire Transfer'/> 
                                <p>Direct Bank Wire Transfer</p>
                            </div>           
                        </div>
                        <p className='wire-transfer-text'>Account Name: Kaffi e.V.</p>
                        <p className='wire-transfer-text'>IBAN: DE51430609671262435500</p>
                        <p className='wire-transfer-text'>SWIFT?BIC Code: GENODEM1GLS</p>
                        <p className='wire-transfer-text'>Bank Name: GLS Bank</p>
                        <p className='wire-transfer-text'>Currency: EUR</p>
                        <div className="close-btn-container">
                            <Button text="Close" className="close-btn" onClick = {closeWireTransfer} />
                        </div>

                    </div>
                </div>:
                null}

            {showBenevity ? 
                <div className="benevity">
                    <div className="benevity-content">
                        <p className='benevity-text'>We are now on Benevity, a donation platform that several companies are partnered with, like Google & Microsoft. These companies typically match employee donations, thus doubling your contribution to us. If your company is partnered with Benevity, consider us for your donation.</p>
                        <div className="close-btn-container">
                            <Button text="Close" className="benevity-close-btn" onClick = {closeBenevity} />
                        </div>
                    </div>
                </div>
                :null}
        </div>
    )}
}

export default Donate