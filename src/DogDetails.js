function DogDetails({ dogs }) {
    
    return (
        <div>
            <h1>{dogs.name}</h1>
            <h3>age: {dogs.age}</h3>
            <img src={dogs.src} alt="dog"/>
            <h3>facts:</h3>
            <ul>
                {dogs.facts.map(f => <li>{f}</li>)}
            </ul>
        </div >
    )
}

export default DogDetails