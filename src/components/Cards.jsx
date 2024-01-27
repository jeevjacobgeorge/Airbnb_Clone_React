import React ,{ useState } from 'react'
import './Cards.css'
import star from '../assets/star.png'
import ellipse from '../assets/ellipse.png'
const images_path = "./assets/"

const Cards = () =>{
    return(
        <div className='cards-section'>
            <Card 
                img_filename="img_1.webp"
                hover_filename="img_1_hover.jpg"
                heading="Master French Cuisine"
                price_dollars = {66}
                rating = {4.0}
                rating_count = {9}
                country = "SA"
            />
                <Card
                    img_filename="img_5.webp"
                    hover_filename="img_egypt.webp"
                    heading="Plan A Trip To Egypt With a Local Insider"
                    price_dollars = {200}
                    rating = {5.0}
                    rating_count = {2}
                    country = "USA"
                />
            <Card
                img_filename="img_grandma.jpg"
                hover_filename="img_food_hover.webp"
                heading="Pasta with the Grandmas"
                price_dollars = {125}
                rating = {5.0}
                rating_count = {30}
                country = "Italy"
            />
            <Card
                img_filename="image_4.jpeg"
                hover_filename="image_4_hover.avif"
                heading="Intuitive Tarot Reading and Meditation"
                price_dollars = {95}
                rating = {4.6}
                rating_count = {19}
                country = "USA"
            />
            <Card
                img_filename="img_6.jpg"
                hover_filename="img_5_hover.jpeg"
                heading="Treat yourself the Olympic chef way"
                price_dollars = {150}
                rating = {5.0}
                rating_count = {15}
                country = "USA"
            />
            <Card
                img_filename="img_tea.jpeg"
                hover_filename="img_4_hover.webp"
                heading="Tea tasting with a Tea Sommelier"
                price_dollars = {75}
                rating = {5.0}
                rating_count = {8}
                country = "CA"
            />
        </div>
    )
    }
const Card = (props) => {
    const [isHovered, setHover] = useState(false)
    
  return (
        <div className='card' onMouseEnter={() => setHover(true) } onMouseLeave={() => setHover(false)}>
            <div className='card-img'>
                <img src={isHovered ? images_path + props.hover_filename : images_path + props.img_filename} alt="image_1" />
            </div>
            <div className='card-details'>
                <div className='card-details-top'>
                    <img id ='star' src={star} alt="star" />
                    <span>{props.rating.toFixed(1)}</span>
                    <span className='gray'>({props.rating_count || 0})</span>
                    <img id='ellipse' src={ellipse} alt="ellipse" />
                    <span className='gray'>{props.country}</span>                    
                </div>
                    <p id='card-heading'>{props.heading}</p>
                    <p id='card-text'><strong>From ${props.price_dollars}</strong> / person </p>

            </div>
        </div>
  )
}

export default Cards