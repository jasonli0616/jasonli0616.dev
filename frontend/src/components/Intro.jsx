import React from "react";
import logo from './../files/jl_logo.png';
import Button from "./Button";
import './../css/Intro.css';
import { Envelope, Github } from 'react-bootstrap-icons';

export default class Intro extends React.Component {

    render() {
        return (
            <div className="intro-card" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000">

                {/* Main intro */}
                <img src={logo} className="logo" alt="JL" data-aos="fade-down" data-aos-delay="700" />
                <h1 data-aos="fade-down" data-aos-delay="900">Jason Li</h1>
                <h2 style={{marginTop: "5px"}} data-aos="fade-down" data-aos-delay="1100">High school student</h2>
                
                {/* Buttons */}
                <div style={{display: "flex", justifyContent: "center"}} data-aos="fade-up" data-aos-delay="1300">
                    <Button scrollTo="about" data-aos="fade-up" data-aos-delay="1300">About me</Button>
                    <Button scrollTo="projects" data-aos="fade-up" data-aos-delay="1350">Projects</Button>
                </div>

                {/* Icons */}
                <div style={{display: "flex", justifyContent: "center"}}>
                    <a href="https://github.com/jasonli0616" target="_blank" rel="noreferrer" data-aos="fade-up-right" data-aos-delay="1500">
                        <Github size={50} color="white" style={{margin: "10px 20px"}} />
                    </a>
                    <div data-aos="fade-up-left" data-aos-delay="1700">
                        <Button scrollTo="contact" urlScroll={true}>
                            <Envelope size={50} color="white" style={{margin: "10px 20px"}} />
                        </Button>
                    </div>
                </div>

            </div>
        )
    }
}