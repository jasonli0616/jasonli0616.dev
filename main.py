from flask import Flask, send_from_directory, request, jsonify, redirect, url_for
import os
import re
import smtplib



app = Flask(__name__, static_folder='frontend/build')

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    if path == "":
        # Homepage
        return send_from_directory(app.static_folder, 'index.html')

    elif path == "about" or path == "projects" or path == "contact":
        # Section on page
        return redirect(f"{url_for('index')}#{path}")

    elif path != "" and os.path.exists(app.static_folder + '/' + path):
        # Other existing path
        return send_from_directory(app.static_folder, path)

    else:
        # Else redirect to homepage
        return redirect(url_for('index'))


# GitHub repo redirect
@app.route('/github/', defaults={'repo': ''})
@app.route('/github/<path:repo>')
def github(repo):
    '''Redirect to GitHub repo'''
    return redirect(f'https://github.com/jasonli0616/{repo}')

# Send email
@app.route('/send-email/', methods=['POST'])
def send_email():
    '''Contact form'''

    sendEmail = True
    return_json = {}

    # Get contact form details
    name = request.json['name']
    email = request.json['email']
    subject = request.json['subject']
    message = request.json['message']
    
    # Validation (not empty)
    if name == '':
        return_json['msg'] = 'Please enter your name.'
        sendEmail = False
    elif email == '' or not re.fullmatch(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', email):
        return_json['msg'] = 'Please enter your email address.'
        sendEmail = False
    elif message == '':
        return_json['msg'] = 'Please enter your message.'
        sendEmail = False

    # Send email
    if sendEmail:
        try:
            with smtplib.SMTP(os.getenv('SERVER'), int(os.getenv('PORT'))) as smtp:
                smtp.starttls()
                fromEmail = os.getenv('EMAIL_ADDR')
                fromPassword = os.getenv('EMAIL_PW')
                smtp.login(fromEmail, fromPassword)

                msgsubject = f'Message from Website: "{subject}"'
                msgbody = f'Name:\n{name}\n\nEmail:\n{email}\n\nSubject:\n{subject}\n\nMessage:\n{message}'

                smtp.sendmail(fromEmail, fromEmail, f'Subject: {msgsubject}\n\n{msgbody}')
            
            return_json['msg'] = 'Email sent!'
        except:
            return_json['msg'] = 'An error occurred. Please try again.'
        
    return jsonify(return_json)


if __name__ == '__main__':
    app.run(use_reloader=True, threaded=True)