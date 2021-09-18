const contact_form = document.getElementById('contact-form');
const contact_button = document.getElementById('contact-button');

contact_form.addEventListener('keydown', (event) => {
    contact_button.innerHTML = 'Send email';
})
contact_form.addEventListener('submit', send_email);

async function send_email(event) {
    event.preventDefault();
    sendEmailDots();

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

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

    contact_button.innerHTML = result['msg'];
    return false;
}

function sendEmailDots() {
    contact_button.innerHTML = "Sending email.";
    setInterval(() => {
        switch (contact_button.innerHTML) {
            case 'Sending email.':
                contact_button.innerHTML = 'Sending email..';
                break;
            case 'Sending email..':
                contact_button.innerHTML = 'Sending email...';
                break;
            case 'Sending email...':
                contact_button.innerHTML = 'Sending email.';
                break;
        }
    }, 500)
}