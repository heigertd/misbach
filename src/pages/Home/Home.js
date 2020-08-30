import React, {useEffect} from 'react'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import HomeCard from '../../components/HomeCard/HomeCard'
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
            <div className='top-third'></div>
            <div  className='image-home'>
                <img src={logo} />
            </div>
            <div className='links'>
                <HomeCard  image={slide1} text='Search through out various charts, including pedigree charts, descendant charts and even free pdfs' location='/charts' name='Charts' />
                <div className='home-big-card'>
                    <img className='home-card-image' src={grant} alt= 'nine generation fan frame chart'/>
                    <div className='home-card-text-div'>
                        <p className='home-card-text'>Learn about how we started and how to get in contact with us</p>
                        <a href='/about-contact' className = 'home-tab'>About</a> 
                    </div>
                </div>
            </div>
        </div>
    )
}
