import { useState, useEffect } from 'react';

import styles from './Projects.module.css';

import Button from './../Button/Button';

function Project(props) {
    return (
        <div className={styles.project} data-aos="fade-up" data-aos-anchor-placement="center-bottom">

            {/* Title */}
            <h2>{props.title}</h2>

            {/* Image */}
            <img src={props.image} alt="" style={{ maxHeight: "300px" }} data-aos="fade-up" data-aos-delay="200" />

            {/* Description */}
            <p>
                {props.children}
                {/* Languages */}
                {props.languages ? (
                    <span className={styles.projectLanguage}>
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

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/jasonli0616/jasonli0616.dev/main/json/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data.reverse()));
    }, [])

    return (
        <div className={`card`} id="projects" style={{ textAlign: 'center' }}>
            <h1>My Projects</h1>

            <div className={styles.projects}>

                {projects ? (projects.map((project, key) =>
                    <Project title={project.name} image={project.imageURL} languages={project.languages} url={project.buttonURL} website={project.buttonWebsiteName} key={key}>
                        {project.description}
                    </Project>
                )) : null}
            </div>
            <div style={{ paddingBottom: '3vh' }}>
                <Button href="https://github.com/jasonli0616?tab=repositories">See more projects</Button>
            </div>
        </div>
    );
};