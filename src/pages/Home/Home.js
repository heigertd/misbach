import React, {useEffect} from 'react'
import Dropdown from '../../components/Dropdown/Dropdown';
import HomeCard from '../../components/HomeCard/HomeCard'
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
            <Dropdown title = 'Charts' content = 'charts' />
            <Dropdown title = 'About' content = 'about' /> 
        </div>
    </div>
    )
}
