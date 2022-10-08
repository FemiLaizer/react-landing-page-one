import React from 'react'

const collections = ({ img, name, details, price }) => {

    return (
        <div className="collection-box" id="collections">
            <div className='collection-img'>
                <img src={img} alt="" />
            </div>
            <h4>{name}</h4>
            <p>{details}</p>
            <h6>{price}</h6>
        </div>
    )
}

export default collections