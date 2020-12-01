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
        <div className = 'main-home'>
            <div className = 'logo-image'>
                <img className = 'arrow' src="https://img.icons8.com/android/48/000000/expand-arrow.png"/>
            </div>
            <div className = 'text'>
                <h1 className = 'title'>World Famous Genealogy Charts</h1>
                <p className = 'title'>We make great charts, that make great gifts. For over 50 years we've been providing the world's best genealogy charts. At least that's what we keep hearing from our customers. Thank you for your business over the years</p>
            </div>
            {/* <div className = 'chart-div'> */}
                <div className = 'charts-image'>
                    <div className = 'chart-text'>
                        <h1>Charts</h1>
                        <p>We have a variety of pedigree and descendant charts, even some free PDFs</p>
                    </div>
                </div>
            {/* </div> */}
            {/* <div className = 'about-div'> */}
                <div className = 'about-image'>
                    <div className = 'about-text'>
                        <h1>About</h1>
                        <p>Learn more about how we started and what we do</p>
                    </div>
                </div>
            {/* </div> */}
            <div className = 'logo-image'></div>
        </div>
    )
}
