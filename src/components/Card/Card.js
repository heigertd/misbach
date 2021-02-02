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
                {props.amazon && 
                    <a target = '_blank' href = {props.amazon}><button>Purchase Here</button></a>
                }
                {props.download &&
                    <a target = '_blank' href = {props.download}><button>Download Here</button></a>
                }
            </div>
        </div>
    )
}
