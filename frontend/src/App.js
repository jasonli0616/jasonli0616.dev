import React from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './css/style.css';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

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