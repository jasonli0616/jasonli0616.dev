import styles from './Intro.module.css';

import Button from './../Button/Button';
import { Envelope, Github } from 'react-bootstrap-icons';

export default function Intro() {
    return (
        <div className={`card ${styles.introCard}`} data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000">

            {/* Main intro */}
            <img src="https://github.com/jasonli0616/jasonli0616.dev/blob/main/img/jl_logo.png?raw=true" className={styles.logo} alt="JL" data-aos="fade-down" data-aos-delay="700" />
            <h1 data-aos="fade-down" data-aos-delay="900">Jason Li</h1>
            <h2 style={{ marginTop: "5px" }} data-aos="fade-down" data-aos-delay="1100">High school student</h2>

            {/* Buttons */}
            <div style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="1300">
                <Button scrollTo="about" data-aos="fade-up" data-aos-delay="1300">About me</Button>
                <Button scrollTo="projects" data-aos="fade-up" data-aos-delay="1350">Projects</Button>
            </div>

            {/* Icons */}
            <div style={{ display: "flex", justifyContent: "center" }}>

                <a href="https://github.com/jasonli0616" target="_blank" rel="noreferrer" data-aos="fade-up-right" data-aos-delay="1500">
                    <Github size={50} color="white" className={styles.iconLink} />
                </a>

                <Button scrollTo="contact" urlScroll={true} data-aos="fade-up-left" data-aos-delay="1700">
                    <Envelope size={50} color="white" className={styles.iconLink} />
                </Button>

            </div>

        </div>
    );
};