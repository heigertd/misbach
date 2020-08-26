import React from 'react'
import './HomeCard.css'

export default function HomeCard(props) {
    return (
        <div className='home-card-big-card'>
                <img className='home-card-card-image' src={props.image} alt= 'nine generation fan frame chart'/>
                <p className='home-card-card-text'>{props.text}</p>
                <a href={props.location} className = 'home-tab'>{props.name}</a> 
        </div>
    )
}
