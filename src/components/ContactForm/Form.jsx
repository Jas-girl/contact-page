import React, { useState } from 'react';
import "./Form.css";

const Form = () => {
    const [details, setDetails] = useState({
        names: '',
        email: '',
        msg: ''
    });

    const handleFn = (event) => {
        const { name, value } = event.target;
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(details);
    };

    return (
        <div>
            <div className="contact-container">
                <div className="form-text">
                    <div className="text">
                        <div className="form-button">
                            <button className="btn btn-chat">
                                <ion-icon name="chatbox-ellipses-outline"></ion-icon>VIA SUPPORT CHAT
                            </button>
                            <button className="btn btn-call">
                                <ion-icon name="call-outline"></ion-icon>VIA CALL
                            </button>
                        </div>
                        <div className="email-btn">
                            <button className="btnemail">
                                <ion-icon name="chatbox-ellipses-outline"></ion-icon>VIA SUPPORT FORM
                            </button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} id="submitform">
                        <div className="form-name">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="names" 
                                value={details.names}
                                onChange={handleFn} 
                            />
                        </div>
                        <div className="form-email">
                            <label htmlFor="email">E-Mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={details.email}
                                onChange={handleFn} 
                            />
                        </div>
                        <div className="form-textbox">
                            <label htmlFor="textarea">Text</label>
                            <textarea 
                                id="textarea" 
                                name="msg" 
                                rows="3" 
                                value={details.msg}
                                onChange={handleFn}
                            ></textarea>
                        </div>
                        <div className="submit-btn">
                            <button className="btnsubmit" type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
                <div className="form-image">
                    <img src="/images/image.svg" alt="contactimage" />
                </div>
            </div>
        </div>
    );
}

export default Form;
