import React, {useEffect} from 'react'
import Dropdown from '../../components/Dropdown/Dropdown';
import HomeCard from '../../components/HomeCard/HomeCard';
import slide1 from '../../images/slide1.png';
import logo from '../../images/logo.png'
import './home.css'

export default function Home() {

    // useEffect(() => {
    //     window.addEventListener('scroll', blurOnScroll)
    // }, [])

    return (
    <div>
        {/* <div className = 'parallax-wrapper'>
            <div className='arrow'>
                <img src="https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png"/>
            </div>
        </div> */}
        <HomeCard />
        <div className = 'home-content'>
            <Dropdown title = 'Charts' content = 'charts' text = 'Browse through our wide selection of charts rangin from pedigree, descendant and even some free PDF files!' img = {slide1}/>
            <Dropdown title = 'About' content = 'about' reverse='set' text = 'Learn more about the company and find out how to contact us here!' img = {logo} /> 
        </div>
    </div>
    )
}
