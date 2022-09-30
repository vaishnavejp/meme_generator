import React from "react";
import boxesData from "./boxesData";
import memesData from "./memesData";

export default function Boxes(props) {

    //const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: props.on ? "black" : "white",
        borderRadius: '15px'
    }

    // function changeOn() {
    //     setOn(prevOn => !on)
    // }

    return (
        <div style={styles}
            className="boxes"
            onClick={() => props.changeOn(props.id)}
        >
        </div >
    )
}


// const [boxes, setBoxes] = React.useState(boxesData)

// function changeOn(id) {
//   console.log(boxes[id - 1].on)
//   setBoxes(prevState => {
//     const newSquares = []
//     for (let i = 0; i < prevState.length; i++) {
//       const currentState = prevState[i]
//       if (currentState.id == id) {
//         const updatesBox = {
//           ...currentState,
//           on: !currentState.on
//         }
//         newSquares.push(updatesBox)
//       }
//       else {
//         newSquares.push(currentState)
//       }
//     }
//     return newSquares
//   })
// }

// function changeOn(id) {
//     setBoxes(prevState => {
//         return prevState.map((square) => {
//             return square.id === id ? { ...prevState, on: !square.on } : square
//         })
//     })
// }

// const box = boxes.map(boxi => (
//     <Boxes on={boxi.on}
//         key={boxi.id}
//         id={boxi.id}
//         changeOn={changeOn}
//     />
// ))

