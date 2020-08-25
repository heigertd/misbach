import React from 'react'
import Header from '../../components/Header/Header'
import slide1 from '../../images/slide1.png'
import './home.css'

export default function Home() {
    return (
        <div className='home-page'>
            <Header />
            <div className='home'>
                <img src={slide1} className='image-home' alt = 'geneology chart' />
                <h1>World Famous Genealogy Charts</h1>
                <h3>We make great charts, that make great gifts. For over 50 years we've been providing the world's best genealogy charts. At least that's what we keep hearing from our customers. Thank you for your business over the years.</h3>
            </div>
        </div>
    )
}
