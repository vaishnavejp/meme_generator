import React from "react";

export default function Jokes(props) {

    const [punch, setPunch] = React.useState(true)

    function changeP() {
        console.log(punch)
        setPunch(prevState => !prevState)
    }

    return (
        <div className="block">
            {props.setup && <h1>{props.setup}</h1>}
            <h4>{punch && props.punchline}</h4>
            <button onClick={changeP}>Click me!</button>
        </div>
    )
}


// const jokes = JokesData.map(joke => (
//     <Jokes key={joke.id}
//         id={joke.id}
//         setup={joke.setup}
//         punchline={joke.punchline}
//     />
// ))
