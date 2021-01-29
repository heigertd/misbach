import React from 'react'
import './card.css'

export default function Card(props) {


    return (
        <div className = 'card'>
            <div className = 'card-title'>
                <h3 className='card-text-title'>{props.text}</h3>
                <img className='card-image' src={props.image} alt= 'nine generation fan frame chart'/>
            </div>
            <div className = 'card-content'>
                <p>Size: {props.size}</p><br/>
                <p className='card-text'>{props.description}</p>
                <h4>{props.price}</h4>
                <a href ={props.amazon ? props.amazon : 'google.com'}><p>{props.amazon ? 'Purchase Here' : 'Download Here'}</p></a>
            </div>
        </div>
    )
}
