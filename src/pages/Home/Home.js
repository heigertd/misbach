import React from 'react'
import Header from '../../components/Header/Header'
import slide1 from '../../images/slide1.png'

export default function Home() {
    return (
        <div>
            <Header />
            <img src={slide1} alt = 'geneology chart' />
            <h1>World Famous Genealogy Charts</h1>
            <h3>We make great charts, that make great gifts. For over 50 years we've been providing the world's best genealogy charts. At least that's what we keep hearing from our customers. Thank you for your business over the years.</h3>
            <h3>Browse our charts by category</h3>
            <div>
                <button>PEDIGREE</button>
                <button>DESCENDANTS</button>
                <button>FREE PDFs</button>
            </div>
        </div>
    )
}
