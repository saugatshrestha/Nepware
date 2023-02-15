import React from 'react'

export default function PortfolioDescription({title, description}) {
    return (
        <>
            <article className='card-portfolio'>
                <h3 className='card-portfolio__title'>{title}</h3>
                <p className='card-portfolio__description'>{description}</p>
                <a href="#" className='btn btn-primary btn-lg'>View Work</a>
            </article>
        </>
    )
}
