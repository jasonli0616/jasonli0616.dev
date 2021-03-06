import styles from './Contact.module.css';

function Required() {
    return (
        <span style={{color: "red"}}>*</span>
    );
};

async function formSubmit(event) {
    event.preventDefault();

    event.target.button.innerHTML = 'Sending email...';

    let name = event.target.name.value;
    let email = event.target.email.value;
    let subject = event.target.subject.value;
    let message = event.target.message.value;

    const result = await fetch('/send-email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            subject,
            message
        })
    }).then((res) => res.json());

    event.target.button.innerHTML = result['msg'];
};

export default function Contact() {
    return (
        <div className={`card ${styles.contact}`} id="contact" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <form method="POST" onSubmit={formSubmit}>
                <h1>Contact</h1>

                <label htmlFor="name">Name <Required /></label>
                <input type="text" name="name" id="name" required />

                <label htmlFor="email">Email address <Required /></label>
                <input type="email" name="email" id="email" required />

                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject" />

                <label htmlFor="message">Message <Required /></label>
                <textarea name="message" id="message" rows="10" required></textarea>

                <button type="submit" id="button">Send email</button>

            </form>
        </div>
    );
};