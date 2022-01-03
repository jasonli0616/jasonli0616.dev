import './../css/Button.css'

import { Link } from 'react-scroll';

export default function Button(props) {

    if (props.scrollTo) {
        // If scrolling button

        if (props.urlScroll) {
            // If URL scroll
            return (
                <Link to={props.scrollTo} smooth={true} value={props.children} style={{ cursor: "pointer" }}>
                    {props.children}
                </Link>
            );

        } else {
            return (
                // If button scroll
                <Link className="btn" to={props.scrollTo} smooth={true} value={props.children}>
                    {props.children}
                </Link>
            );
        }

    } else {
        return (
            // Normal button
            <a className="btn" href={props.href} target="_blank" rel="noreferrer" onClick={props.onclick}>
                {props.children}
            </a>
        );
    };

};