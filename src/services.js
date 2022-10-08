import React from 'react'

import Collections from './collections'
import { service } from './service'

const services = () => {
    return (
        <section className='container' id='services'>
            <h3>Our Services</h3>
            <div className='services-container'>
                {service.map(item => {
                    return (
                        <Collections
                            key={item.id}
                            {...item}
                            img={item.icon}
                            name={item.title}
                            details={item.decription}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default services