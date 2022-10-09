import React from 'react'

function header() {
    return (
        <header className="container" id="home">
            <div id="nav-bar">
                <div className={"logo"}>doekas</div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#collection">Collections</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
        </header>
    )
}

export default header