import React from 'react'
import './Cards.css'
import star from '../assets/star.png'
import ellipse from '../assets/ellipse.png'
const images_path = "./src/assets/"
const Cards = () =>{
    return(
        <div className='cards-section'>
            <Card 
                img_filename="image_1.png"
                heading="Life lessons with katie Zaferes"
                price_dollars = {136}
                rating = {5.0}
                rating_count = {6}
                country = "USA"
            />
            <Card
                img_filename="img_2.jpeg"
                heading="Learn wedding photography"
                price_dollars = {125}
                rating = {5.0}
                rating_count = {30}
                country = "USA"
            />
            <Card
                img_filename="img_5.webp"
                heading="Plan A Trip To Egypt With a Local Insider"
                price_dollars = {200}
                rating = {5.0}
                rating_count = {2}
                country = "USA"
            />
            <Card
                img_filename="image_4.jpeg"
                heading="Intuitive Tarot Reading and Meditation"
                price_dollars = {95}
                rating = {4.6}
                rating_count = {19}
                country = "USA"
            />
        </div>
    )
    }
const Card = (props) => {
  return (
        <div className='card'>
            <img src={images_path + props.img_filename} alt="image_1" />
            <div className='card-details'>
                <div className='card-details-top'>
                    <img id ='star' src={star} alt="star"/>
                    <span>{props.rating.toFixed(1)}</span>
                    <span className='gray'>({props.rating_count || 0})</span>
                    <img id='ellipse' src={ellipse} alt="ellipse" />
                    <span className='gray'>{props.country}</span>                    
                </div>
                <div className="card-details-bottom">
                    <p id='card-heading'>{props.heading}</p>
                    <p id='card-text'><strong>From ${props.price_dollars}</strong> / person </p>
                </div>
            </div>
        </div>
  )
}

export default Cards