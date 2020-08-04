import React from 'react'
import './card.css'
import genFold from '../../images/15genfold.jpg'

export default function Card(props) {
    return (
        <div>
            <div className = 'card'>
                <img src={props.image} alt= 'nine generation fan frame chart'/>
                <p>{props.text}</p>
                <a href = '#'>More Info</a>
            </div>
        </div>
    )
}
