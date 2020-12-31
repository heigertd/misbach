import React, {useState, useEffect} from 'react';
import AboutContact from '../../pages/AboutContact/AboutContact';
import Charts from '../../pages/Charts/Charts'
import './dropdown.css'

export default function Dropdown(props) {

    const [dropdownState, setDropdownState] = useState([]);
    const [dropdownContentState, setDropdownContentState] = useState([]);

    useEffect(() => {
        setDropdownContentState(props.content)
    }, [])

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
                {dropdownContentState === 'charts' &&
                    <Charts />
                }
                {dropdownContentState === 'about' &&
                    <AboutContact />
                }
            </div>
        </div>

    )
}
