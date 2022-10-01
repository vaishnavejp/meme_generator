import React from "react";

export default function Apis() {
    const [imgUrl, setImgUrl] = React.useState("")

    function handleChange(e) {
        e.preventDefault()
        setImgUrl(e.target.value)
        console.log(imgUrl)
    }

    function handleEvent(e) {
        e.preventDefault()
        console.log("clicked", imgUrl)
        fetch(imgUrl)
            .then(res => res.blob())
            .then(data => {
                let ulrImg = URL.createObjectURL(data)
                let atag = document.createElement("a")
                atag.href = ulrImg
                atag.download = "filename"
                document.body.appendChild(atag)
                atag.click()
                atag.remove()
                console.log(ulrImg)
            })
    }
    // console.log(imgUrl)
    return (
        <div>
            <form action="#">
                <input
                    type="url"
                    placeholder="type"
                    value={imgUrl}
                    onChange={handleChange}
                />
                <button onClick={handleEvent}>download</button>
            </form>
        </div >
    )
}