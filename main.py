from flask import Flask, render_template, redirect, url_for, request, flash
import smtplib
import requests
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# Get languages and projects as list
def getLanguages():
    # Get JSON from GitHub
    response = requests.get('https://raw.githubusercontent.com/jasonli0616/jasonli0616.dev/main/json/languages.json')
    # Sort by 'order' key
    return sorted(list(response.json()), key=lambda k: k['order'])

def getProjects():
    # Get JSON from GitHub
    response = requests.get('https://raw.githubusercontent.com/jasonli0616/jasonli0616.dev/main/json/projects.json')
    # Sort by 'order' key
    return sorted(list(response.json()), key=lambda k: k['order'], reverse=True)

# Routes
@app.route('/index.html/', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def index():

    if request.method == 'POST':
        # Contact

        # Get contact form details
        name = request.form['name']
        email = request.form['email']
        subject = request.form['subject']
        message = request.form['message']

        try:
            # Validation (not empty)
            if name == '':
                flash('Please enter your name.')
                raise ValueError
            elif email == '':
                
                flash('Please enter your email address.')
                raise ValueError
            elif message == '':
                flash('Please enter your message.')
                raise ValueError

            # Send email
            with smtplib.SMTP('smtp-mail.outlook.com', 587) as smtp:
                smtp.starttls()
                fromEmail = os.getenv('EMAIL_ADDR')
                fromPassword = os.getenv('EMAIL_PW')
                smtp.login(fromEmail, fromPassword)
                msgsubject = f'Message from Website: "{subject}"'
                msgbody = f'Name:\n{name}\n\nEmail:\n{email}\n\nSubject:\n{subject}\n\nMessage:\n{message}'
                smtp.sendmail(fromEmail, fromEmail, f'Subject: {msgsubject}\n\n{msgbody}')
            
            flash('Message sent!')
        except ValueError:
            pass
        except:
            flash('An error occurred. Please try again.')

    return render_template('index.html', languages=getLanguages(), projects=getProjects())

@app.route('/<page>/')
def shortcut(page):
    # Shortcuts
    if page == 'github': return redirect('https://github.com/jasonli0616')
    elif page == 'devpost': return redirect('https://devpost.com/jasonli0616')
    elif page == 'about' or page == 'projects' or page == 'contact': return redirect(f'/#{page}')
    return redirect(url_for('index'))

def main():
    app.run(debug=True)
    #app.run(host='0.0.0.0', port=443)


if __name__ == '__main__':
    main()
