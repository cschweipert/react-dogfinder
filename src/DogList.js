import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
    let links = dogs.map(d => <li><Link to={`/dogs/${d.name}`}>{d.name}</Link></li>)

    return (
        <ul>
            {links}
        </ul>
    );
}

export default DogList