import React, {useEffect} from 'react'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import HomeCard from '../../components/HomeCard/HomeCard'
import Dropdown from '../../components/Dropdown/Dropdown'
import slide1 from '../../images/slide1.png'
import logo from '../../images/logo.png'
import grant from '../../images/grantmisbach.jpg'
import sal from 'sal.js'
import './home.css'

export default function Home() {

    useEffect(() => {
        sal({
            threshold: .25,
            once: false,
        
        });
    }, [])

    return (
    <div>
        <div class = 'parallax-wrapper'>
            <div className='arrow'>
                <img src="https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png"/>
            </div>
        </div>
        <div class = 'content'>
            <Dropdown title = 'Charts' />
            <Dropdown title = 'About' />
            
        </div>
    </div>
    )
}
