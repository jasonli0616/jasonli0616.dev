import React from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './css/style.css';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default class App extends React.Component {
    componentDidMount() {
        AOS.init();
    }

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