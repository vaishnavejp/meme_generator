
import React from "react"

export default function Forms() {
    const [formData, setFD] = React.useState({
        firstName: "",
        lastName: "",
        emailID: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    });

    console.log(formData)
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        console.log(event)
        console.log(checked)
        setFD(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function submitForm(event) {
        event.preventDefault()
        console.log("uin")
        // submitToApi(formData)
    }

    return (
        <form onSubmit={submitForm}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="text"
                name="emailID"
                placeholder="Email ID"
                onChange={handleChange}
                value={formData.emailID}
            />
            <textarea
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                name="isFriendly"
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Tick?</label>
            <br />
            <fieldset>
                <legend>employees</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="employed">unemployed</label>
                <input
                    type="radio"
                    id="employed"
                    name="employment"
                    value="employed"
                    checked={formData.employment === "employed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">employed</label>
                <input
                    type="radio"
                    id="student"
                    name="employment"
                    value="student"
                    checked={formData.employment === "student"}
                    onChange={handleChange}
                />
                <label htmlFor="student">student</label>
            </fieldset>
            <select
                id="sel"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
            </select>
            <button>Send it in</button>
        </form>
    )
} 