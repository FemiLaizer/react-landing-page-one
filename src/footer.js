import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


const footer = () => {
    return (
        <div id='footer'>
            {/* <p className="social-icon">
                <FontAwesomeIcon icon={solid('user-secret')} />
                <FontAwesomeIcon icon={regular('coffee')} />
                <FontAwesomeIcon icon={icon({ name: 'coffee', style: 'solid' })} />
                <FontAwesomeIcon className='icon' icon={brands('twitter')} />
            </p> */}
            <p>&copy; doesneakers 2022.</p>
        </div >
    )
}

export default footer