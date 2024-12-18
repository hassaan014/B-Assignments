import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div className='flex w-40 ' id='card'>
            <div className='w-70' id="text">
                <div className='flex fc'>
                    <div id='new'>NEW</div>
                    <div id='specify'>
                        <div id='title'>{props.name}</div>
                        <div id='caption'>{props.cap}</div>
                    </div>
                </div>
                <div id='price'>Rs. {props.price}</div>
            </div>
            <div className='w-40' id='imgDiv'>
                <img className='w-90' src={props.img} />
            </div>
        </div>
    )
}

export default Card