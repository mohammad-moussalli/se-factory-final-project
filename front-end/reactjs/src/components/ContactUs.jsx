import { useState } from "react";
import axios from "axios";
import '../style/contact-us.css'

const ContactUs = () => {

    const contactUsApi = "http://127.0.0.1:8000/api/contact";

    const [email, setEmail] = useState(null);
    const [fullname, setFullName] = useState(null);
    const [subject, setSubject] = useState(null);
    const [message, setMessage]  = useState(null);

    const contactUs = async () => {
        axios.post(contactUsApi, { full_ame: fullname, email: email, message: message, subject: subject})
    }

    const [closeContactUs, setCloseContactUs] = useState(false);

    const closeContactUsForm = () => {
        setCloseContactUs(true)
    }

    return (
        <div className='contact-us-component'>
            <form className='contact-us-form' onSubmit={contactUs}>
                <p className="contact-us-title">How Can We Help?</p>
                <input className="contact-us-input" placeholder="Full Name" onChange={e => setFullName(e.target.value)}/>
                <input className="contact-us-input" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                <input className="contact-us-input" placeholder="Subject" onChange={e => setSubject(e.target.value)}/>
                <textarea className="contact-us-input" placeholder="Messsage" onChange={e => setMessage(e.target.value)}/>
                <div className="contact-us-buttons">
                    <button className="contact-us-submit-button" type="submit">Submit</button>
                    <button className="contact-us-close-button" onClick={closeContactUsForm} >Close</button>
                </div>
            </form>
        </div>
    );
}
export default ContactUs;