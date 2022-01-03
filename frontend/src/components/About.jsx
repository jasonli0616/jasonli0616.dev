import { useState } from 'react';

import './../css/About.css';

import Button from './Button';
import { Star, StarFill } from 'react-bootstrap-icons';

function Language(props) {
    return (
        <div className={props.sublang ? "lang sublang" : "lang mainlang"}>
            {/* Image */}
            {props.img ? <img src={props.img} alt={props.children} /> : null}
            {/* Name */}
            <p>{props.children}</p>
            {/* Stars */}
            <div className="stars">
                {Array.from(Array(props.stars).keys(), (key) => {
                    return <StarFill key={key} />
                })}
                {Array.from(Array(5 - props.stars).keys(), (key) => {
                    return <Star key={key} />
                })}
            </div>
        </div>
    );
};

export default function About(props) {

    const [languages, setLanguages] = useState(null);

    fetch('https://raw.githubusercontent.com/jasonli0616/jasonli0616.dev/main/json/languages.json')
        .then(response => response.json())
        .then(data => setLanguages(data));

    return (
        <div className="card about-card" id="about" data-aos="zoom-out-up" data-aos-anchor-placement="top-center">

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
                {languages ? languages.map((language, key) =>
                    <Language img={language.imageURL} stars={language.stars} sublang={language.sub_lang} key={key}>
                        {language.name}
                    </Language>
                ) : null}
            </div>

        </div>
    );
};