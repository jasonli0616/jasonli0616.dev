import styles from './Button.module.css'

import { Link } from 'react-scroll';

export default function Button(props) {

    if (props.scrollTo) {
        // If scrolling button

        if (props.urlScroll) {
            // If URL scroll
            return (
                <Link to={props.scrollTo} smooth={true} style={{ cursor: "pointer" }} data-aos={props['data-aos']} data-aos-delay={props['data-aos-delay']}>
                    {props.children}
                </Link>
            );

        } else {
            return (
                // If button scroll
                <Link className={styles.btn} to={props.scrollTo} smooth={true}>
                    {props.children}
                </Link>
            );
        }

    } else {
        return (
            // Normal button
            <a className={styles.btn} href={props.href} target="_blank" rel="noreferrer" onClick={props.onclick} style={props.style}>
                {props.children}
            </a>
        );
    };

};