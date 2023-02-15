import React from 'react'

export default function NewsItem({title, description, imageurl}) {
    return (
        <>
            <article className='card-news'> 
                <figure className='card-news__thumbnail'>
                    <img src={imageurl} className='w-100 object-fit' alt={title}/>
                </figure>
                <div className='card-news__details'>
                    <h3 className='card-news__title'>{title}</h3>
                    <p className='card-news__description'>{description}</p>
                    <a href='/' className='btn btn-primary btn-lg'>Read More</a>
                </div>
            </article>
        </>
    )
}
