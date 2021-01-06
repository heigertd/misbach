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
                <button className = 'button' onClick={changeState}>
                    <a href = '#chart'>
                        <img className = {dropdownState === 'set' ? 'rotate-arrow' : ''} src="https://img.icons8.com/ios-filled/25/000000/expand-arrow--v1.png"/>
                    </a>
                </button>
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
