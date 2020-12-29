import React, {useState} from 'react'
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
        <div>
            <div className = 'dropdown'>
                <h3>{props.title}</h3>
                <button onClick={changeState}>Click here</button>
            </div>
            <div className = {dropdownState === 'set' ? 'dropdown-content seen' : 'dropdown-content hidden'}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis laborum similique expedita necessitatibus totam est! Iusto ipsam, ipsa quo autem placeat ducimus dolorum facere quaerat deleniti vel velit necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis laborum similique expedita necessitatibus totam est! Iusto ipsam, ipsa quo autem placeat ducimus dolorum facere quaerat deleniti vel velit necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis laborum similique expedita necessitatibus totam est! Iusto ipsam, ipsa quo autem placeat ducimus dolorum facere quaerat deleniti vel velit necessitatibus?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis laborum similique expedita necessitatibus totam est! Iusto ipsam, ipsa quo autem placeat ducimus dolorum facere quaerat deleniti vel velit necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis laborum similique expedita necessitatibus totam est! Iusto ipsam, ipsa quo autem placeat ducimus dolorum facere quaerat deleniti vel velit necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis laborum similique expedita necessitatibus totam est! Iusto ipsam, ipsa quo autem placeat ducimus dolorum facere quaerat deleniti vel velit necessitatibus?</p>
            </div>
        </div>

    )
}
