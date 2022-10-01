import React from "react";
import memesData from "./memesData";
import ReactDOM from "react-dom";

export default function Inputs() {
    const [topUp, setTopUp] = React.useState(-500)
    const [topDown, setTopDown] = React.useState(0)
    const [topLeft, setTopLeft] = React.useState(0)
    const [topRight, setTopRight] = React.useState(0)
    const [bottomUp, setBottomUp] = React.useState(-100)
    const [bottomDown, setBottomDown] = React.useState(0)
    const [bottomLeft, setBottomLeft] = React.useState(0)
    const [bottomRight, setBottomRight] = React.useState(0)

    const stylesPropTop = {
        // backgroundColor: 'blue',
        position: 'relative',
        top: `${topUp}px`,
        bottom: `${topDown}px`,
        left: `${topLeft}px`,
        right: `${topRight}px`
    }

    const stylesPropBottom = {
        // backgroundColor: 'blue',
        position: 'relative',
        top: `${bottomUp}px`,
        bottom: `${bottomDown}px`,
        left: `${bottomLeft}px`,
        right: `${bottomRight}px`
    }

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeURL: "https://i.imgflip.com/1bhk.jpg",
        memeName: ""
    })

    const [imgUrl, setImgUrl] = React.useState("")
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
            topText: "",
            bottomText: "",
            memeURL: apiMemes[i].url,
            memeName: apiMemes[i].name
        }))
    }
    // console.log(meme.memeURL)
    //console.log(meme.memeName)

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

    function handleImageDownload(e) {
        e.preventDefault()
        fetch(meme.memeURL)
            .then(res => res.blob())
            .then(data => {
                let ulrImg = URL.createObjectURL(data)
                let atag = document.createElement("a")
                atag.href = ulrImg
                atag.download = ulrImg
                document.body.appendChild(atag)
                atag.click()
                atag.remove()
            })
    }

    function handleTUp() {
        setTopUp(topUp - 10)
    }
    function handleTDown() {
        setTopUp(topUp + 10)
    }
    function handleTLeft() {
        setTopLeft(topLeft - 10)
    }
    function handleTRight() {
        setTopLeft(topLeft + 10)
    }
    function handleBUp() {
        setBottomUp(bottomUp - 10)
    }
    function handleBDown() {
        setBottomUp(bottomUp + 10)
    }
    function handleBLeft() {
        setBottomLeft(bottomLeft - 10)
    }
    function handleBRight() {
        console.log("dskjfhs")
        setBottomLeft(bottomLeft + 10)
    }


    return (
        <main>
            <div>
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
                </div>
                <button
                    className="form--button"
                    onClick={addImg}>
                    Get a new meme template 🖼️
                </button>
                <button className="download-btn" onClick={handleImageDownload}>
                    Download template image ⏬
                </button>
                <div className="banner">
                    <div className="tops">
                        <button onClick={() => handleTUp()}>⬆️</button>
                        <button onClick={() => handleTDown()}>⬇️</button>
                        <button onClick={() => handleTLeft()}>⬅️</button>
                        <button onClick={() => handleTRight()}>➡️</button>
                    </div>
                    <div className="img-url">
                        <img src={meme.memeURL} />
                        <div className="img-text">
                            <h1 style={stylesPropTop}>{meme.topText}</h1>
                            <h1 style={stylesPropBottom}>{meme.bottomText}</h1>
                        </div>
                    </div>
                    <div className="bottoms">
                        <button onClick={() => handleBUp()}>⬆️</button>
                        <button onClick={() => handleBDown()}>⬇️</button>
                        <button onClick={() => handleBLeft()}>⬅️</button>
                        <button onClick={() => handleBRight()}>➡️</button>
                    </div>
                </div>
                <br></br>
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