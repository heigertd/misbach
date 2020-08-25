import React from 'react'
import './card.css'
import genFold from '../../images/15genfold.jpg'

export default function Card(props) {

    function clickedMoreInfoReturn(){
        var chosenInfo = 'clicked'
        props.clickedMoreInfo(chosenInfo)
    }

    return (
        <div className='big-card'>
            <div className = 'card'>
                <img className='card-image' src={props.image} alt= 'nine generation fan frame chart'/>
                <p className='card-text'>{props.text}</p>
                <button onClick={clickedMoreInfoReturn}>More Info</button>
            </div>
        </div>
    )
}
