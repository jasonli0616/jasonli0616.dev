import React from 'react';

import './css/style.css';

import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

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