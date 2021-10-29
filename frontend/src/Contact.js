import React from "react";
import './css/Contact.css';

class Required extends React.Component {
    render() {
        return (
            <span style={{color: "red"}}>*</span>
        )
    }
}

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact" id="contact">
                <form>
                    <h1>Contact</h1>

                    <label htmlFor="name">Name <Required /></label>
                    <input type="text" name="name" id="contact-name" required />

                    <label htmlFor="email">Email address <Required /></label>
                    <input type="email" name="email" id="contact-email" required />

                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="contact-subject" />

                    <label htmlFor="contact-message">Message <Required /></label>
                    <textarea name="message" id="contact-message" rows="10" required></textarea>

                    <button type="submit" id="contact-button">Send email</button>

                </form>
            </div>
        )
    }
}