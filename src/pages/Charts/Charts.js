import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import './charts.css'

export default function Charts() {
    const [popupState, setPopupState] = useState([]);
    const [selectedItemState, setSelectedItemState] = useState(['0']);
    const [filteredItemsState, setFilteredItems] = useState([]);
    const [itemState, setItemState] = useState([
        {
            product: 'Nine Generation Fan Frame Chart',
            description: 'This is the Nine generation fan chart',
            image: '/static/media/15genfold.d319ba04.jpg',
            type: 'pedigree',
            number: '0'
        },
        {
            product: '15 Generation folding chart',
            description: 'This is the 15 Gen chart',
            image: '/static/media/15genfold.d319ba04.jpg',
            type:'descendant',
            number: '1'
        },
        {
            product: 'PDF item',
            description: 'This is a PDF option',
            image: '/static/media/15genfold.d319ba04.jpg',
            type: 'pdf',
            number: '2'
        },
    ])

    useEffect(()=>{
        setPopupState('');
    },[])

    useEffect(()=>{
        setSelectedItemState('');
    },[])

    useEffect(()=>{
        setFilteredItems(itemState)
    },[])

    function clickedMoreInfo(cardInfo){
        setPopupState(cardInfo);
        setSelectedItemState(this.item)
    }
    function closeMoreInfo(){
        setPopupState('');
    }
    function filterPedigree(){
        const copyOfItems = [...itemState];
        const searchedList = copyOfItems.filter(item => item.type.includes('pedigree'));
        setFilteredItems(searchedList)
    }
    function filterDescendants(){
        const copyOfItems = [...itemState];
        const searchedList = copyOfItems.filter(item => item.type.includes('descendant'));
        setFilteredItems(searchedList)
    }
    function filterPDF(){
        const copyOfItems = [...itemState];
        const searchedList = copyOfItems.filter(item => item.type.includes('pdf'));
        setFilteredItems(searchedList)
    }
    function filterSeeAll(){
        setFilteredItems(itemState)
    }

    return (
        <div>
            <Header />
            <div className='search'>
                <p>View:</p>
                <button onClick={filterPedigree}>Pedigree</button>
                <button onClick={filterDescendants}>Descendant</button>
                <button onClick={filterPDF}>Free PDF</button>
                <button onClick={filterSeeAll}>See All</button>
            </div>
            <div className = 'category'>
            {filteredItemsState && filteredItemsState && 
                    <div>
                        {filteredItemsState.map(function filter(item, index){
                            return <Card clickedMoreInfo = {clickedMoreInfo} item={filteredItemsState[index].number} text={filteredItemsState[index].description} />
                        })}
                    </div>
                }    
            </div>
            
            {popupState && popupState && 
                <div className='popup'>
                    <button onClick = {closeMoreInfo}>Close</button>
                    <div className='popup-card'>
                        <h1>{itemState[selectedItemState].product}</h1>
                        <img src={itemState[selectedItemState].image} alt={itemState[selectedItemState].product}/>     
                        <p>{itemState[selectedItemState].description}</p>
                        <a target='_blank' href='https://www.amazon.com/TreeSeek-Generation-Pedigree-Genealogy-Ancestry/dp/B0138VDW6G/ref=sr_1_1?camp=1789&creative=9325&dchild=1&keywords=B0138VDW6G&linkCode=xm2&linkId=295957fc366292bc077f6fea1a423a33&qid=1597184681&sr=8-1&tag=misbach'>View on Amazon</a>
                    </div>        
                </div>
            }
        </div>
    )
}
