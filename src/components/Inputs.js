import React from "react";
import memesData from "./memesData";
import ReactDOM from "react-dom";

export default function Inputs() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeURL: "https://i.imgflip.com/1bhk.jpg"
    })

    const [apiMemes, setApiMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setApiMemes(data.data.memes))
    }, [])

    function addImg() {
        const i = Math.floor(Math.random() * apiMemes.length);
        setMeme(prevState => ({
            ...prevState,
            memeURL: apiMemes[i].url
        }))
    }

    function handleInputs(event) {
        const { name, value } = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
        //console.log(event.target)
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form--text1"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleInputs}
                />
                <input
                    type="text"
                    className="form--text2"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleInputs}
                />
                <button
                    className="form--button"
                    onClick={addImg}>
                    Get a new meme template 🖼️
                </button>
                <div className="meme-imgs">
                    <img src={meme.memeURL} />
                    <h1 className="topText">{meme.topText}</h1>
                    <h1 className="bottomText">{meme.bottomText}</h1>
                </div>
            </div>
        </main >
    )
}


    // const [things, setThings] = React.useState(["thing 1", "thing 2"])
    // const i = Math.floor(Math.random()*memesData.data.memes.length);
    // console.log(memesData.data.memes[i].url)

    // function addItem() {
    //     const things2 = `thing ${things.length+1}`
    //     console.log(things2)
    //     setThings(prevState => [...prevState, things2])
    // }
    // const thingel = things.map(thing=> <p>{thing}</p>)





            //.then(data => console.log("jdshf", data["data"]["memes"][0]["url"]))
        // const i = Math.floor(Math.random() * memesData.data.memes.length);
        // setMeme(prevState => ({
        //     ...prevState,
        //     memeURL: memesData.data.memes[i].url
        // }))
        // console.log(memesData.data.memes[i].url)