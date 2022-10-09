import React from 'react'

function contact() {
    const input = document.querySelector("input")
    const displayInput = () => {
        console.log(input)
    }
    return (
        <section id="contact">
            <h3>{"Contact Us Form"}</h3>
            <div className="contact-box">
                <p>
                    <input id='input-mail' type={"text"} placeholder="Your Email here..." />
                </p>
                <p>
                    <textarea placeholder={"Write your message here..."}></textarea>
                </p>
                <p>
                    <input className='send' type={"Submit"} onClick={displayInput} value="Send Message" />
                </p>
            </div>
        </section>
    )
}

export default contact