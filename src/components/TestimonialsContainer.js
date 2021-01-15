import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import testimonialsData from '../testimonialsData'
import TestimonialCard from './TestimonialCard.js'

const TestimonialsContainer = () => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = testimonialsData.length - 1;

        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index])

    return <section className="testimonials-section">
        <div className="testimonials-title">
            <h2>User Reviews</h2>
            <div className="underline"></div>
        </div>
        <div className="testimonials-container">
            <div className="testimonial-articles" 
                style={{transform: `translateX(${-index * 500}px)`
            }}>
                {
                    testimonialsData.map((data) =>{
                        return <TestimonialCard key={data.id} {...data} index={index} />
                    })
                }
            </div>
        </div>
        <div className="testimonials-slider">
            <div className="dots">
                {
                    testimonialsData.map((data) => {
                        return <div key={data.id} className={`dot ${data.id - 1 === index && ` dot-active`}`} ></div>
                    })
                }
            </div>
            <div className="arrows">
                <button className="prev-btn" onClick={() => setIndex(index - 1)}><AiOutlineArrowLeft /></button>
                <button className="next-btn" onClick={() => setIndex(index + 1)}><AiOutlineArrowRight /></button>
            </div>
        </div>
    </section>
}

export default TestimonialsContainer