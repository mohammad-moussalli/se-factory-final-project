import { useState } from "react";
import axios from "axios";
import '../style/contact-us.css'

const ContactUs = () => {

    const contactUsApi = "http://localhost:8080/contact-us";

    const [email, setEmail] = useState(null);
    const [fullname, setFullName] = useState(null);
    const [subject, setSubject] = useState(null);
    const [message, setMessage]  = useState(null);

    const contactUs = async () => {
        axios.post(contactUsApi, { full_name: fullname, email: email, message: message, subject: subject})
    }

    return (
        <div className='contact-us-component'>
            <form className='contact-us-form' onSubmit={contactUs}>
                <p className="contact-us-title">How Can We Help?</p>
                <input className="contact-us-input" placeholder="Full Name" id='fullname' name='fullname' value={fullname} onChange={e => setFullName(e.target.value)}/>
                <input className="contact-us-input" placeholder="Email" id='email' name='email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input className="contact-us-input" placeholder="Subject" id='subject' name='subject' value={subject} onChange={e => setSubject(e.target.value)}/>
                <textarea className="contact-us-input" placeholder="Message" id='message' name='message' value={message} onChange={e => setMessage(e.target.value)}/>
                <div className="contact-us-buttons">
                    <button className="contact-us-submit-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default ContactUs;