import React from 'react';
import './css/style.css';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default class App extends React.Component {
    render() {
        return (
            <>
                <Intro />
                <About />
                <Projects />
                <Contact />
            </>
        )
    }
}