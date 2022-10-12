import React from 'react'

const blog = () => {
    return (
        <section id='blog'>
            <h3>Our Blog</h3>
            <div id='blog-content'>
                <div id='blog-img'>
                    <img src={require("./images/blog/1.jpg")} alt="" />
                </div>
                <div id='blog-text'>
                    <p>perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                        perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                        perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                        perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                        perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                    </p>
                    <button>Read More</button>
                </div>
            </div>
        </section>
    )
}

export default blog