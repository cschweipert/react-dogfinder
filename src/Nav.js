import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
    let links = dogs.map(d => (
        <li><Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link></li>
    ));

    return (
        <ul>
            {links}
        </ul>
    );
}

export default Nav;