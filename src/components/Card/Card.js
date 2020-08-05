import React from 'react'
import './card.css'
import genFold from '../../images/15genfold.jpg'

export default function Card(props) {

    function clickedMoreInfoReturn(){
        var chosenInfo = 'clicked'
        props.clickedMoreInfo(chosenInfo)
    }

    return (
        <div>
            <div className = 'card'>
                <img src={props.image} alt= 'nine generation fan frame chart'/>
                <p>{props.text}</p>
                <button onClick={clickedMoreInfoReturn}>More Info</button>
            </div>
        </div>
    )
}
