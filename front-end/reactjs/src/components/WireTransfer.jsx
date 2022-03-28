import { useState } from 'react';
import image from '../assets/images/bank-transfer.png';
import Button from './Button';
import '../style/wire-transfer.css'

const WireTransfer = () => {

    const [closeTag, setCloseTag] = useState(true)
    const onClick = () => {
        setCloseTag(false)
    }

    return (
        <>
        {closeTag &&
        <div className="wire-transfer">
            <div className="wire-transfer-content">
                <div className='wire-transfer-logo'>
                    <div className="wire-transfer-column1">
                        <img className='wiretransfer-image' src={image} alt='Wire Transfer'/> 
                        <p>Direct Bank Wire Transfer</p>
                    </div>
                    <div className="wire-transfer-column2">
                        <Button text="x" className="close-btn" onClick = {onClick} />
                    </div>           
                </div>
                <p className='wire-transfer-text'>Account Name: Kaffi e.V.</p>
                <p className='wire-transfer-text'>IBAN: DE51430609671262435500</p>
                <p className='wire-transfer-text'>SWIFT?BIC Code: GENODEM1GLS</p>
                <p className='wire-transfer-text'>Bank Name: GLS Bank</p>
                <p className='wire-transfer-text'>Currency: EUR</p>
            </div>
        </div>
        }
        </>
    )
}

export default WireTransfer