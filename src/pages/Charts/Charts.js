import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import './charts.css'
//FIXME: item number changes when filtered

export default function Charts() {
    const [popupState, setPopupState] = useState([]);
    const [selectedItemState, setSelectedItemState] = useState(['0']);
    const [filteredItemsState, setFilteredItems] = useState([]);
    const [itemState, setItemState] = useState([
        {
            product: 'Nine Generation Fan Frame Chart',
            description: 'This is the Nine generation fan chart',
            image: '/static/media/15genfold.d319ba04.jpg',
            type: 'pedigree'
        },
        {
            product: '15 Generation folding chart',
            description: 'This is the 15 Gen chart',
            image: '/static/media/15genfold.d319ba04.jpg',
            type:'descendant'
        },
        {
            product: 'PDF item',
            description: 'This is a PDF option',
            image: '/static/media/15genfold.d319ba04.jpg',
            type: 'pdf'
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

    return (
        <div>
            <Header />
            <div className='search'>
                <p>View:</p>
                <button onClick={filterPedigree}>Pedigree</button>
                <button onClick={filterDescendants}>Descendant</button>
                <button onClick={filterPDF}>Free PDF</button>
            </div>
            <div>
                <h1 id='pedigree'>Pedigree Charts</h1>
            </div>
            <div className = 'category'>
            {filteredItemsState && filteredItemsState && 
                    <div>
                        {filteredItemsState.map(function filter(item, index){
                            return <Card clickedMoreInfo = {clickedMoreInfo} item={index} text={filteredItemsState[index].description} />
                        })}
                    </div>
                }    
            </div>
            
            {popupState && popupState && 
                <div className='popup'>
                        <h1>{itemState[selectedItemState].product}</h1>
                        <p>{itemState[selectedItemState].description}</p>
                        <img src={itemState[selectedItemState].image} alt={itemState[selectedItemState].product}/>
                        <button onClick = {closeMoreInfo}>Close</button>     
                </div>
            }
        </div>
    )
}
