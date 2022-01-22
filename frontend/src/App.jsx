import React from 'react';

import './style.css';

import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

    AOS.init();

    return (
        <>
            <Intro />
            <About />
            <Projects />
            <Contact />
        </>
    );
};