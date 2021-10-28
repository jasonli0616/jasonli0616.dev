import React from "react";
import './css/Button.css'

export default class Button extends React.Component {
    scrollToSection() {
        // document.getElementById(scrollToID).scrollIntoView({ block: 'start',  behavior: 'smooth' });
        // console.log(this.props.scrollTo);
    }
    
    render() {
        return (
            <a className="btn" href={this.props.href} target="_blank" rel="noreferrer">
                {this.props.children}
            </a>
        )
    }
}