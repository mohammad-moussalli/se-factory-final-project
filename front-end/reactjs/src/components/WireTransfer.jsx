import { useState } from 'react';
import image from '../assets/images/bank-transfer.png';
import Button from './Button';

const WireTransfer = () => {

    const [closeTag, setCloseTag] = useState(false)
    const onClick = () => {
        setCloseTag(!closeTag)
    }

    return (
        <div className="wire-transfer">
            <div className="wire-transfer-column1">
                <div className='wire-transfer-logo'>
                    <img src={image} alt='Wire Transfer'/> 
                    <h5>Direct Bank Wire Transfer</h5>           
                </div>
                <h6>Account Name: Kaffi e.V.</h6>
                <h6>IBAN: DE51430609671262435500</h6>
                <h6>SWIFT?BIC Code: GENODEM1GLS</h6>
                <h6>Bank Name: GLS Bank</h6>
                <h6>Currency: EUR</h6>
            </div>

            <div className="wire-transfer-column2">
                <Button text="x" className="close-btn" onClick = {onClick} />
            </div>
        </div>
    )
}

export default WireTransfer