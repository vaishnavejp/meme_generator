import React from "react";

export default function Forms2() {

    const [formData, setFd] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsLetter: true,
        checking: true
    })

    //console.log(formData)
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        console.log(checked)
        setFd(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target.newsLetter)
        const message = formData.newsLetter ? "thanks" : "fuck you"
        console.log(message)
        console.log("submitted")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="vaish@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <br /><br />
                <input
                    type="checkbox"
                    id="check"
                    name="newsLetter"
                    checked={formData.newsLetter}
                    onChange={handleChange}
                />
                <label htmlFor="check">I want to join the newsletter</label>
                <br />
                <input
                    type="checkbox"
                    id="check2"
                    name="checking"
                    checked={formData.checking}
                    onChange={handleChange}
                />
                <label htmlFor="check2">I do want to join the newsletter</label>
                <br />
                <button>Sign Up</button>
            </form>
        </div>
    )
}