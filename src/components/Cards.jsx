import React ,{ useState } from 'react'
import './Cards.css'
import star from '../assets/star.png'
import ellipse from '../assets/ellipse.png'
import cardData from '../card_data'
const images_path = "./assets/"

const Cards = () =>{
    const cards_mapped = cardData.map(item => <Card key={item.img_filename} {...item} />)   
    return(
        <div className='cards-section'>
           {cards_mapped}
        </div>
    )
    }
const Card = (props) => {
    let badgeText = "";
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        console.log("Location prop value:", props.location);
        badgeText = "ONLINE"
    }
    const [isHovered, setHover] = useState(false)
  return (
        <div className='card' onMouseEnter={() => setHover(true) } onMouseLeave={() => setHover(false)}>
            {badgeText && <div className="sold-out-badge">{badgeText}</div> }
            <div className='card-img'>
                <img src={isHovered ? images_path + props.hover_filename : images_path + props.img_filename} alt="image_1" />
            </div>
            <div className='card-details'>
                <div className='card-details-top'>
                    <img id ='star' src={star} alt="star" />
                    <span>{props.rating.toFixed(1)}</span>
                    <span className='gray'>({props.rating_count || 0})</span>
                    <img id='ellipse' src={ellipse} alt="ellipse" />
                    <span className='gray'>{props.location}</span>                    
                </div>
                    <p id='card-heading'>{props.heading}</p>
                    <p id='card-text'><strong>From ${props.price_dollars}</strong> / person </p>

            </div>
        </div>
  )
}

export default Cards