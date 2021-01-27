import React from 'react'
import './HomeCard.css'

export default function HomeCard() {
    return (
        // <div className = 'homecard-div'>
        //     <div className = 'home-image'></div>
        //     <div className = 'home-text-div'>
        //         <div className = 'home-text-text'>
        //             <h3 className = 'homecard-title'>World Famous Genealogy Charts</h3>
        //             <p>We make great charts, that make great gifts. For over 50 years we've been providing the world's best genealogy charts. At least that's what we keep hearing from our customers. Thank you for your business over the years.</p>
        //         </div>
        //     </div>
        // </div>
        <div className = 'homecard'>
            <div className = 'homecard-div'>
                <div className = 'homecard-content'>
                    <div className = 'img-div'>
                        {/* <h1 className = 'homecard-h1'>World Famous Genealogy Charts</h1>
                        <p>We make great charts, that make great gifts. For over 50 years we've been providing the world's best genealogy charts. At least that's what we keep hearing from our customers. Thank you for your business over the years.</p> */}
                    </div>
                </div>
            </div>
            <div className = 'text-div'>
                <h1 className = 'homecard-h1'>World Famous Genealogy Charts</h1>
                <p>We make great charts, that make great gifts. For over 50 years we've been providing the world's best genealogy charts. At least that's what we keep hearing from our customers. Thank you for your business over the years.</p>
            </div>
        </div>    
    )
}
