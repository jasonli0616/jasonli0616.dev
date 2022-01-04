import { useState } from 'react';

import './../css/Projects.css';

import Button from './Button';

function Project(props) {
    return (
        <div className="project" data-aos="fade-up" data-aos-anchor-placement="center-bottom">

            {/* Title */}
            <h2>{props.title}</h2>

            {/* Image */}
            <img src={props.image} alt="" style={{ maxHeight: "300px" }} data-aos="fade-up" data-aos-delay="200" />

            {/* Description */}
            <p>
                {props.children}
                {/* Languages */}
                {props.languages ? (
                    <span className="project-language">
                        <br />
                        Made with:
                        <br />
                        {props.languages}
                    </span>
                ) : null}
            </p>

            {/* Button */}
            <Button href={props.url}>View on {props.website}</Button>

        </div>
    );
};

export default function Projects() {

    const [projects, setProjects] = useState(null);

    fetch('https://raw.githubusercontent.com/jasonli0616/jasonli0616.dev/main/json/projects.json')
        .then(response => response.json())
        .then(data => setProjects(data.reverse()));

    return (
        <div className="card" id="projects">
            <h1>My Projects</h1>

            <div className="projects">

                {projects ? (projects.map((project, key) =>
                    <Project title={project.name} image={project.imageURL} languages={project.languages} url={project.buttonURL} website={project.buttonWebsiteName} key={key}>
                        {project.description}
                    </Project>
                )) : null}

            </div>
        </div>
    );
};