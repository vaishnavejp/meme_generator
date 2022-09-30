import React from "react";

export default function Apis() {

    const [starWars, setStarWars] = React.useState({})
    const [count, setCount] = React.useState(1)
    console.log("in")

    React.useEffect(() => {
        // fetch(`https://swapi.dev/api/people/${count}`)
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setStarWars(data["data"]["memes"][0]["url"]))
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(prevState => prevState + 1)}>Get new character</button>
            <h6>{count}</h6>
            <p>{JSON.stringify(starWars)}</p>
        </div >
    )
}