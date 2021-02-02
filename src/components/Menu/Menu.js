import React, {useState} from 'react';
import './menu.css'

export default function Menu() {
    const [hover, setHover] = useState([]);


    return (
        <div className = 'menu-main'
            onMouseEnter={() => setHover('hover')}
            onMouseLeave={() => setHover('')} 
        >
            <div className = {hover === 'hover' ? 'menu-list show' : 'menu-list hide'}>
                <div className = 'menu-item'>
                    <a href= '/'>
                        <img src="https://img.icons8.com/material-sharp/36/ffffff/home.png"/>
                        <p>Home</p>
                    </a>
                </div>
                <div className = 'menu-item'>
                    <a href = '/charts'>
                        <img src="https://img.icons8.com/fluent-systems-regular/36/ffffff/genealogy.png"/>
                        <p>Charts</p>
                    </a>
                </div>
                <div className = 'menu-item'>
                    <a href = '/about-contact'>
                        <img src="https://img.icons8.com/ios-glyphs/36/ffffff/info.png"/>
                        <p>About</p>
                    </a>
                </div>
            </div>
            
        </div>
    )
}
