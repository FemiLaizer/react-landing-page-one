import React from 'react'

function header() {
    return (
        <header className="container" id="container">
            <div>
                <div className={"logo"}>doekas</div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                </ul>
            </div>
        </header>
    )
}

export default header