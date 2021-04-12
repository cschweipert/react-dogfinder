import React from  "react";
import {useParams} from "react-router-dom";

function DogDetails({ dogs }) {
    
    let {name} = useParams()
    console.log("these are the dogs", name);

    let dog = dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
    );

    return (
        <div>
            <h1>{dog.name}</h1>
            <h3>age: {dog.age}</h3>
            <img src={dog.src} alt="dog"/>
            <h3>facts:</h3>
            <ul>
                {dog.facts.map(f => <li>{f}</li>)}
            </ul>
        </div >
    )
}

export default DogDetails;