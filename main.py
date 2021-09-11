from flask import Flask, render_template, redirect, url_for, request, jsonify
import smtplib
import requests
import os

app = Flask(__name__)

def getLanguages():
    '''Get languages as list'''
    # Get JSON from GitHub
    response = requests.get('https://raw.githubusercontent.com/jasonli0616/jasonli0616.dev/main/json/languages.json')
    # Sort by 'order' key
    languages = sorted(list(response.json()), key=lambda k: k['order'])
    # Put in animation delay
    animation_delay = 300
    for language in languages:
        language['animation_delay'] = animation_delay
        animation_delay += 50
    return languages

def getProjects():
    '''Get projects as list'''
    # Get JSON from GitHub
    response = requests.get('https://raw.githubusercontent.com/jasonli0616/jasonli0616.dev/main/json/projects.json')
    # Sort by 'order' key
    return sorted(list(response.json()), key=lambda k: k['order'], reverse=True)

@app.route('/index.html/')
@app.route('/')
def index():
    '''Homepage'''
    return render_template('index.html', languages=getLanguages(), projects=getProjects())

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
    elif email == '':
        return_json['msg'] = 'Please enter your email address.'
        sendEmail = False
    elif message == '':
        return_json['msg'] = 'Please enter your message.'
        sendEmail = False

    # Send email
    if sendEmail:
        try:
            with smtplib.SMTP('smtp-mail.outlook.com', 587) as smtp:
                smtp.starttls()
                fromEmail = os.getenv('EMAIL_ADDR')
                fromPassword = os.getenv('EMAIL_PW')
                smtp.login(fromEmail, fromPassword)

                msgsubject = f'Message from Website: "{subject}"'
                msgbody = f'Name:\n{name}\n\nEmail:\n{email}\n\nSubject:\n{subject}\n\nMessage:\n{message}'

                smtp.sendmail(fromEmail, fromEmail, f'Subject: {msgsubject}\n\n{msgbody}')
            
            return_json['msg'] = 'Message sent!'
        except:
            return_json['msg'] = 'An error occurred. Please try again.'
        
    return jsonify(return_json)

@app.route('/github/<repo>')
def github(repo):
    '''Redirect to GitHub repo'''
    return redirect(f'https://github.com/jasonli0616/{repo}')

@app.route('/<page>/')
def shortcut(page):
    '''Shortcuts'''
    if page == 'github': return redirect('https://github.com/jasonli0616')
    elif page == 'devpost': return redirect('https://devpost.com/jasonli0616')
    elif page == 'about' or page == 'projects' or page == 'contact': return redirect(f'/#{page}')
    return redirect(url_for('index'))

def main():
    app.run(debug=True)
    #app.run(host='0.0.0.0', port=443)


if __name__ == '__main__':
    main()
