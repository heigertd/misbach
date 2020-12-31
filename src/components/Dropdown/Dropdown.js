import React, {useState, useEffect} from 'react';
import Charts from '../../pages/Charts/Charts'
import './dropdown.css'

export default function Dropdown(props) {

    const [dropdownState, setDropdownState] = useState([]);

    function changeState(){
        if(dropdownState === 'set'){
            setDropdownState('')
        }else{
            setDropdownState('set')
        }
    }

    return (
        <div id = 'chart'>
            <div className = 'dropdown'>
                <h3>{props.title}</h3>
                <button onClick={changeState}><a href = '#chart'>Click Here</a></button>
            </div>
            <div className = {dropdownState === 'set' ? 'dropdown-content seen' : 'dropdown-content hidden'}>
                <Charts />
                
            </div>
        </div>

    )
}
