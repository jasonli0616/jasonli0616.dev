import React from "react";
import './../css/Projects.css'
import Button from "./Button";

class Project extends React.Component {
    render() {
        return (
            <div className="project" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                {/* Title */}
                <h2>{this.props.title}</h2>
                {/* Image */}
                <img src={this.props.image} alt="" style={{maxHeight: "300px"}} data-aos="fade-up" data-aos-delay="200" />
                {/* Description */}
                <p>
                    {this.props.children}
                    {/* Languages */}
                    {this.props.languages ? (
                        <span className="project-language">
                            <br />
                            Made with:
                            <br/>
                            {this.props.languages}
                        </span>
                    ) : (
                        null
                    )}
                </p>
                {/* Button */}
                <Button href={this.props.url}>View on {this.props.website}</Button>
                
            </div>
        )
    }
}

export default class Projects extends React.Component {
    state = {
        projects: null
    }

    async componentDidMount() {
        // Get projects data
        const response = await fetch('https://raw.githubusercontent.com/jasonli0616/jasonli0616.dev/main/json/projects.json')
        const data = await response.json();
        data.reverse();
        this.setState({projects: data});
    }

    render() {
        return (
            <>
            <h1 id="projects">My Projects</h1>
            <div className="projects">
                {this.state.projects ? (
                    this.state.projects.map((project, key) =>
                        <Project title={project.name} image={project.imageURL} languages={project.languages} url={project.buttonURL} website={project.buttonWebsiteName} key={key}>
                            {project.description}
                        </Project>
                    )
                ) : (
                    null
                )}
            </div>
            </>
        )
    }
}