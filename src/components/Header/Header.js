import React from 'react'
import logo from '../../images/logo.png'
import './header.css'

export default function Header() {
    return (
        <div className = 'head'>
            <img className = 'image' src={logo} alt='logo'/>
            <div className = 'nav-bar'>
                <a href='/' className = 'tab'>Home</a>
                <a href='/charts' className = 'tab'>Charts</a>
                <a href='/about-contact' className = 'tab'>About/Contact</a>
            </div>
        </div>
    )
}
