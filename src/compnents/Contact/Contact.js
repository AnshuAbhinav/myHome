import React, { useState } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MessageIcon from '@mui/icons-material/Message';
import './Contact.css';

const Contact = () => {

    const [detail, setDetail] = useState({name: '', email: '', message: ''})

    const changeHandler = (e) => {
        setDetail({...detail, [e.target.name]: e.target.value});
    }

    const submitHandler = () => {
        setDetail({name: '', email: '', message: ''})
    }

    return (
        <div className="contactRootDiv">
            <div className="form">
                <div className="yourNameDiv">
                    <AccountBoxIcon fontSize="large" />
                    <input type="text" name="name" value={detail.name} onChange={(e) => changeHandler(e)} placeholder="Your Name" />
                </div>

                <div className="mailDiv">
                    <AlternateEmailIcon fontSize="large" />
                    <input type="email" name="email" value={detail.email} onChange={(e) => changeHandler(e)} placeholder="Email Id" />
                </div>

                <div className="messageDiv">
                    <MessageIcon fontSize="large" />
                    <textarea rows={3} maxLength={50} name="message" value={detail.message} onChange={(e) => changeHandler(e)} placeholder="Your Message" />
                </div>

                <div className={detail.name.length > 2 && detail.email && detail.message.trim().length > 2 ? "button" : "buttonDisabled"} onClick={submitHandler}>Submit</div>
            </div>
        </div>
    )
}

export default Contact;