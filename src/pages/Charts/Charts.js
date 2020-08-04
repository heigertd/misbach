import React from 'react'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import './charts.css'


export default function Charts() {
    return (
        <div>
            <Header />
            <div className='search'>
                <p>View:</p>
                <a href='#'>Pedigree </a>
                <a href='#'>Descendant </a>
                <a href='#'>Free PDF</a>
            </div>
            <div>
                <h1>Pedigree Charts</h1>
            </div>
            <div className = 'category'>
                <Card image = '/static/media/9genfanframe.e23e6d45.jpg' text='this is the 9 gen frame'/>
                <Card image = '/static/media/15genfold.d319ba04.jpg' text='this is the 15 gen fold'/>
                <Card image = '/static/media/9genfanframe.e23e6d45.jpg' text='this is the 9 gen frame'/>
            </div>
            <div>
                <h1>Descendant Charts</h1>
            </div>
            <div className = 'category'>
                <Card image = '/static/media/9genfanframe.e23e6d45.jpg' text='this is the 9 gen frame'/>
                <Card image = '/static/media/15genfold.d319ba04.jpg' text='this is the 15 gen fold'/>
            </div>
            <div>
                <h1> Free PDFs</h1>
            </div>
            <div className = 'category'>
                <Card image = '/static/media/9genfanframe.e23e6d45.jpg' text='this is the 9 gen frame'/>
                <Card image = '/static/media/15genfold.d319ba04.jpg' text='this is the 15 gen fold'/>
                <Card image = '/static/media/9genfanframe.e23e6d45.jpg' text='this is the 9 gen frame'/>
                <Card image = '/static/media/15genfold.d319ba04.jpg' text='this is the 15 gen fold'/>
                <Card image = '/static/media/9genfanframe.e23e6d45.jpg' text='this is the 9 gen frame'/>
                <Card image = '/static/media/15genfold.d319ba04.jpg' text='this is the 15 gen fold'/>
                <Card image = '/static/media/9genfanframe.e23e6d45.jpg' text='this is the 9 gen frame'/>
                <Card image = '/static/media/15genfold.d319ba04.jpg' text='this is the 15 gen fold'/>
            </div>
        </div>
    )
}
