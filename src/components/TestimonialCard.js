import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const TestimonialCard = ({id, name, avatar, location, rating, review, index}) => {
    let starArray = []
    for (let i = 0; i < rating; i++ ) {
        starArray.push(i)
    }
    return (
    <article key={id} className={`testimonial-card ${id - 1 === index && `testimonial-card-active`}`} >
        <div className="testimonial-user">
            <img src={avatar} alt=""/>
            <div className="user-info">
                <h3>{name}</h3>
                <p>{location}</p>
            </div>
        </div>
        <div className="user-rating">
            {
                starArray.map((star, index) => {
                    return <i key={index}><AiFillStar /></i>
                })
            }
        </div>
        <p className="user-review">{review}</p>
    </article>
    )
}

export default TestimonialCard