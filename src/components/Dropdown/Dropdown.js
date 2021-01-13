import React, {useState, useEffect} from 'react';
import AboutContact from '../../pages/AboutContact/AboutContact';
import Charts from '../../pages/Charts/Charts'
import './dropdown.css'

export default function Dropdown(props) {
    const [dropdownState, setDropdownState] = useState([]);
    const [dropdownContentState, setDropdownContentState] = useState([]);
    const [reverseState, setReverseState] = useState([]);

    useEffect(() => {
        setDropdownContentState(props.content)
        setReverseState(props.reverse)
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
            <div className = {reverseState === 'set' ? 'dropdown-reverse' : 'dropdown'}>
                <div className = 'dropdown-text'>
                    <div>
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>
                    </div>
                    <button className = 'button' onClick={changeState}>
                        <a href = '#chart'>
                            <img className = {dropdownState === 'set' ? 'rotate-arrow' : ''} src="https://img.icons8.com/ios-filled/25/000000/expand-arrow--v1.png"/>
                        </a>
                    </button>
                </div>
                <div className = 'dropdown-img-div'>
                    <img className = 'dropdown-img' src = {props.img}/>
                </div>
            </div>
            
            <div className = {dropdownState === 'set' ? 'dropdown-content seen' : 'dropdown-content hidden'}>
                {dropdownContentState === 'charts' &&
                    <Charts />
                }
                {dropdownContentState === 'about' &&
                    <AboutContact />
                }
            </div>
            <hr />
        </div>

    )
}
