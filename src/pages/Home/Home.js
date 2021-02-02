import React from 'react'
import Dropdown from '../../components/Dropdown/Dropdown';
import HomeCard from '../../components/HomeCard/HomeCard';
import slide1 from '../../images/slide1.png';
import logo from '../../images/logo.png'
import './home.css'

export default function Home() {

    return (
    <div className = 'home'>
        <HomeCard />
        <div className = 'home-content'>
            <Dropdown title = 'Charts' href = '/charts' text = 'Browse through our wide selection of charts rangin from pedigree, descendant and even some free PDF files!' img = {slide1}/>
            <Dropdown title = 'About' href = '/about-contact' reverse='set' text = 'Learn more about the company and find out how to contact us here!' img = {logo} /> 
        </div>
    </div>
    )
}
