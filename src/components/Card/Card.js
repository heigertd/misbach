import React from 'react'
import './card.css'
import genFold from '../../images/15genfold.jpg'

export default function Card(props) {


    return (
        <div className = 'card'>
            <div className = 'card-title'>
                <p className='card-text'>{props.text}</p>
                <img className='card-image' src={props.image} alt= 'nine generation fan frame chart'/>
            </div>
            <div className = 'card-content'> 
                <p className='card-text'>{props.description}</p>
            </div>
        </div>
    )
}
