import React from 'react';
import './../css/About.css';
import { Star, StarFill } from 'react-bootstrap-icons';
import Button from './Button';

class Language extends React.Component {
    state = {
        class: this.props.sublang ? "lang sublang" : "lang mainlang"
    }

    render() {
        return (
            <div className={this.state.class}>
                {/* Image */}
                {this.props.img ? <img src={this.props.img} alt={this.props.children} /> : null }
                {/* Name */}
                <p>{this.props.children}</p>
                {/* Stars */}
                <div className="stars">
                    {Array.from(Array(this.props.stars).keys(), (key) => {
                        return <StarFill key={key} />
                    })}
                    {Array.from(Array(5 - this.props.stars).keys(), (key) => {
                        return <Star key={key} />
                    })}
                </div>
            </div>
        )
    }
}

export default class About extends React.Component {
    state = {
        languages: null
    }

    async componentDidMount() {
        // Get languages data
        const response = await fetch('https://raw.githubusercontent.com/jasonli0616/jasonli0616.dev/main/json/languages.json')
        const data = await response.json();
        this.setState({languages: data});
    }

    render() {
        return (
            <div className="about-card" id="about" data-aos="zoom-out-up" data-aos-anchor-placement="top-center">

                {/* About - intro */}
                <h1>About me</h1>
                <p>
                    Hi! I am a high school student in Canada. I am fluent in Python, Node.js, and I am currently learning Java. I am experienced in frameworks such as Flask and Express.js for backend web development. I have participated in numerous hackathons and competitions, including <a href="https://dmz.ryerson.ca/canhack/" target="_blank" rel="noreferrer">CanHack</a>, <a href="https://www.hackthefog.com/" target="_blank" rel="noreferrer">Hack The Cloud</a>, <a href="https://ohacksio.org/" target="_blank" rel="noreferrer">OHacksIO</a>, and <a href="https://hackthenorth.com" target="_blank" rel="noreferrer">Hack The North</a>. These hackathons allow me to use and improve my skills in a competitive environment. The projects that my team and I have created are listed in the <Button scrollTo="projects" urlScroll={true}>projects</Button> section below.
                </p>

                {/* GitHub card */}
                <div className="about-badge">
                    <a href="https://github.com/jasonli0616" target="_blank" rel="noreferrer">
                        <img src="https://github-readme-stats.vercel.app/api?username=jasonli0616&theme=dark&show_icons=true&count_private=true" alt="GitHub stats" />
                    </a>
                </div>

                {/* Languages */}
                <h2>Languages and Technologies</h2>
                <div className="lang-list">
                    {this.state.languages ? (
                        this.state.languages.map((language, key) =>
                            <Language img={language.imageURL} stars={language.stars} sublang={language.sub_lang} key={key}>
                                {language.name}
                            </Language>
                        )
                    ) : (
                        null
                    )
                    
                    }
                </div>

            </div>
        )
    }
}
