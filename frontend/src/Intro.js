import React from "react";
import logo from './files/jl_logo.png';
import Button from "./Button";
import './css/Intro.css';
import { Envelope, Github } from 'react-bootstrap-icons';

export default class Intro extends React.Component {
    render() {
        return (
            <div className="intro-card">

                {/* Main intro */}
                <img src={logo} className="logo" alt="JL" />
                <h1>Jason Li</h1>
                <h2 style={{marginTop: "5px"}}>High school student</h2>
                
                {/* Buttons */}
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button>About me</Button>
                    <Button>Projects</Button>
                </div>

                {/* Icons */}
                <div style={{display: "flex", justifyContent: "center"}}>
                    <a href="https://github.com/jasonli0616" target="_blank" rel="noreferrer">
                        <Github size={50} color="white" style={{margin: "10px 20px"}} />
                    </a>
                    <a href="https://github.com/jasonli0616" target="_blank" rel="noreferrer">
                        <Envelope size={50} color="white" style={{margin: "10px 20px"}} />
                    </a>
                </div>

            </div>
        )
    }
}