import React, {useState, useEffect} from 'react';
import './dropdown.css'

export default function Dropdown(props) {
    const [reverseState, setReverseState] = useState([]);

    useEffect(() => {
        setReverseState(props.reverse)
    }, [])

    return (
        <div className = 'dropdown-page'>
            <div className = 'dropdown'>
                <div className = {reverseState === 'set' ? 'dropdowntext-reverse' : 'dropdown-text'}>
                    <div className = 'dropdown-img-div'>
                        <img className = 'dropdown-img' src = {props.img}/>
                    </div>
                    <div className = 'info'>
                        <p className = 'dropdown-title'>{props.title}</p>
                        <p>{props.text}</p>
                        <a href = {props.href}><button>View Here</button></a>
                    </div>
                </div>
            </div>
            <hr />
        </div>

    )
}
