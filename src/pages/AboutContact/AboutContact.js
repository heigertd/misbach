import React from 'react'
import Header from '../../components/Header/Header'
import Grant from '../../images/grantmisbach.jpg'
import './about-contact.css'

export default function AboutContact() {
    return (
        <div>
            <Header />
            <h1>About Us</h1>
            <div className='about'>
                <img src={Grant} alt='Grant Misbach' />
                <div>
                    <p>Grant L. Misbach founded Misbach Enterprises in 1958, and has been supplying the genealogy community with charts, software and other genealogy supplies for over 50 years. Over a million copies of our charts have been sold across the world. Our quality, experience and reputation have allowed us to gain your trust and praise.</p>
                    <p>Some of our charts focus on function or utility while others focus on presentation. No matter what you are looking for we think you will find it here. All charts come with a 100% satisfaction guarantee. If you don't like the chart just send it back and we will refund your money.</p>
                    <p>We also house one of the largest collections of charts in PDF format. All of these charts are free for personal use. The collection continues to grow. Feedback and ideas are welcome for future designs.</p>
                    <p>Our popular GED Browser (software program that publishes your genealogy on the Internet) was heavily used for over 20 years. It's no longer available for download.</p>
                </div>
            </div>
            <p>You also might enjoy our sister company that develops dynamic custom charts located at TreeSeek.com.</p>
            <p>It's our pleasure to provide you world class genealogy charting products. - Thank you and happy researching!</p>

            <h1>Contact Us</h1>
            <p>Please contact us with any questions or suggestions at info@misbach.org</p>

            <h1>Refund / Return Policy</h1>
            <p>If you are dissatisfied for any reason please email us at info@misbach.org requesting a refund. We will refund your order, and give you instructions to return the product. Thanks!</p>
        </div>
    )
}
