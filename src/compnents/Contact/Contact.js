import React, { useState, useRef } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MessageIcon from '@mui/icons-material/Message';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { validEmail } from "../../Validator/DetailsValidation";
import ContactSuccess from "./ContactSuccess";

const Contact = () => {

    const [detail, setDetail] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);
    const [message, setMessage] = useState('');
    const [errMsg, setErrMsg] = useState(false);
    const form = useRef();


    const changeHandler = (e) => {
        if (e.target.name === "name" || e.target.name === "message") {
            if (e.target.value.match("^[A-Za-z ]*$") !== null)
                setDetail({ ...detail, [e.target.name]: e.target.value });
        }
        else {
            setDetail({ ...detail, [e.target.name]: e.target.value });
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!validEmail.test(detail.email)) {
            setErrMsg(true);
        }
        else {
            emailjs.sendForm('service_9ki07un', 'template_drkg89m', form.current, 'NpacZ6uRHuI4ECbFV')
                .then((result) => {
                    console.log(result.text);
                    setSent(true);
                    setMessage("Message sent successfully");
                    setDetail({ name: '', email: '', message: '' })
                }, (error) => {
                    console.log(error.text);
                    setMessage("Some error");
                });
        }
    }

    setTimeout(() => {
        setMessage('');
        setSent(false);
    }, '50000')

    return (
        sent ?
        <ContactSuccess message={message} />
        :
        <div className="contactRootDiv">
            <form className="form" ref={form}>
                <div className="yourNameDiv">
                    <AccountBoxIcon fontSize="large" />
                    <input type="text" name="name" value={detail.name} onChange={(e) => changeHandler(e)} placeholder="Your Name" />
                </div>

                <div className='mailDiv'>
                    <AlternateEmailIcon fontSize="large" />
                    <input type="email" name="email" style={{color: errMsg ? 'red': 'white'}} value={detail.email} onChange={(e) => changeHandler(e)} placeholder="Email Id" onFocus={() => setErrMsg(false)} />
                </div>

                <div className="messageDiv">
                    <MessageIcon fontSize="large" />
                    <textarea rows={3} maxLength={50} name="message" value={detail.message} onChange={(e) => changeHandler(e)} placeholder="Your Message" />
                </div>

                <div className={detail.name.length > 2 && detail.email && detail.message.trim().length > 2 ? "button" : "buttonDisabled"} onClick={(e) => submitHandler(e)}>Submit</div>
                {
                    sent &&
                    <div style={{ width: '10rem', height: '5rem', position: 'absolute', top: '50%', left: '50%', color: 'whitesmoke' }}>{message}</div>
                }
            </form>
        </div>
    )
}

export default Contact;