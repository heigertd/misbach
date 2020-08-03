import React from 'react'
import logo from '../../images/logo.png'
import './header.css'

export default function Header() {
    return (
        <div className = 'head'>
            <img className = 'image' src={logo} alt='logo'/>
            <div className = 'nav-bar'>
                <button className = 'tab'>Home</button>
                <button className = 'tab'>Charts</button>
                <button className = 'tab'>About/Contact</button>
            </div>
        </div>
    )
}
