import React from 'react'

function contactus() {
    const input = document.querySelector("input")
    const displayInput = () => {
        console.log(input)
    }
    return (
        <section className="container" id="contact-us">
            <div className="content-box">
                <h2>{"Contact Us Form"}</h2>
                <p>
                    <input type={"text"} placeholder="Your Email here..." />
                </p>
                <input type={"Submit"} onClick={displayInput} value="Login-In" />
            </div>
        </section>
    )
}

export default contactus