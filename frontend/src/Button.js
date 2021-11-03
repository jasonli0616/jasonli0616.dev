import React from "react";
import './css/Button.css'
import { Link } from "react-scroll";

export default class Button extends React.Component {
    render() {
        return (
            this.props.scrollTo ? (
                // If scroll
                this.props.urlScroll ? (
                    // If URL scroll
                    <Link to={this.props.scrollTo} smooth={true} value={this.props.children} style={{cursor: "pointer"}}>
                        {this.props.children}
                    </Link>
                ) : (
                    // If button scroll
                    <Link className="btn" to={this.props.scrollTo} smooth={true} value={this.props.children}>
                        {this.props.children}
                    </Link>
                )
            ) : (
                // Normal button
                <a className="btn" href={this.props.href} target="_blank" rel="noreferrer" onClick={this.props.onclick}>
                    {this.props.children}
                </a>
            )
        )
    }
}