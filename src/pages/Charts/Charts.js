import React, {useState, useEffect} from 'react';

import Card from '../../components/Card/Card';
import Menu from '../../components/Menu/Menu';
import ninegen from '../../images/pedigree/9genfanframe.jpg';
import fifteengen from '../../images/pedigree/15genfold.jpg';
import sevengen from '../../images/pedigree/7fancolor.png';
import fivegen from '../../images/descendant/5gendescfold.gif';
import freefive from '../../images/pdf/free-5genped-t.gif';
import freebowtie from '../../images/pdf/free-bowtie-t.gif';
import freebox from '../../images/pdf/free-box-t.gif';
import freefamily from '../../images/pdf/free-familygroup-t.gif';
import freefan from '../../images/pdf/free-fan-t.gif';
import freehorse from '../../images/pdf/free-horse-t.gif';
import freekids from '../../images/pdf/free-kids-t.gif';
import freeped from '../../images/pdf/free-pedigree-t.gif';
import freepicture from '../../images/pdf/free-picture-t.gif';
import freetree from '../../images/pdf/free-tree-t.gif';

import pedigreepdf from '../../pdf/pedigree_chart.pdf'
import fivegenpdf from '../../pdf/5GenPedigree.pdf'
import bowtiepdf from '../../pdf/bowtie_chart.pdf'
import familytreepdf from '../../pdf/family_tree.pdf'
import familygrouppdf from '../../pdf/FamilyGroupRecord.pdf'
import fanchartpdf from '../../pdf/fan_chart.pdf'
import horsepdf from '../../pdf/horse.pdf'
import kidspdf from '../../pdf/kids4gen.pdf'
import boxpdf from '../../pdf/box_chart.pdf'
import picturepdf from '../../pdf/picture_chart.pdf'

import './charts.css'

export default function Charts() {
    const [filteredItemsState, setFilteredItems] = useState([]);
    const [itemState] = useState([
        {
            product: 'Nine Generation Fan Chart',
            description: 'You can not go wrong with this chart. We guarantee you will not be disappointed in the quality or the price. Printed on high-quality parchment paper, displays up to 511 names in a unique and attractive design. The eight closest paternal lines are shaded for reference and convenience in identifying your progress. Elegant enough for display or gift giving, and priced low enough to use as a research aid for yourself.',
            image: ninegen,
            type: 'pedigree',
            price: '15.95',
            size: '25 inches x 27 inches',
            amazon: 'https://www.amazon.com/s?k=B0131UD0CK&camp=1789&creative=9325&linkCode=xm2&linkId=855eb228c4f11a5fe9db5cb42c8a0bb4&tag=misbach&ref=as_li_qf_sp_sr_il_tl'
        },
        {
            product: '15 Generation Pedigree Chart',
            description: 'One of our more popular charts. This chart has passed the test of time. Created over 50 years ago, and still selling strong. The back of the chart contains extra space to go up to a total of 20 generations or more. It also has the ability to fold down to fit in a 3 ring binder. See all your ancestral lines at once. The most popular selling jumbo pedigree chart ever! We recommend you buy two charts and place them side by side so you can see all 15 generations without turning the chart over.',
            image: fifteengen,
            type:'pedigree',
            price: '9.95',
            size: '22.5 inches x 33.5 inches',
            amazon:'https://www.amazon.com/TreeSeek-Generation-Pedigree-Genealogy-Ancestry/dp/B0138VDW6G/ref=sr_1_1?camp=1789&creative=9325&dchild=1&keywords=B0138VDW6G&linkCode=xm2&linkId=295957fc366292bc077f6fea1a423a33&qid=1597184681&sr=8-1&tag=misbach'
        },
        {
            product: '7 Generation Color Fan Chart',
            description: 'You can not go wrong with this chart. We guarantee you will not be disappointed in the quality or the price. Printed on high-quality 100lb premium non-coated paper, displays up to 127 names in a unique and attractive design. The eight closest paternal lines are shaded for reference and convenience in identifying your progress. Elegant enough for display or gift giving, and priced low enough to use as a research aid for yourself.',
            image: sevengen,
            type: 'pedigree',
            price: '15.95',
            size: '18 inches x 24 inches',
            amazon: 'https://www.amazon.com/s?k=B0194M1J0Y&camp=1789&creative=9325&linkCode=xm2&linkId=569f3a3ab13a6ed8c8ba865c355a2905&tag=misbach&ref=as_li_qf_sp_sr_il_tl'
        },
        {
            product: '5 Generation Descendant Chart',
            description: 'You will not find a better descendant chart on the Internet! A good descendant chart is hard to come by. Most folks focus on pedigree (ancestor) charts. You will not find a more clever or functional descendant. It has the same popular look and feel as the 15 generation pedigree chart. The entire chart has been adapted to fit on one side of the chart. It no longer continues onto the back side. There is not a better chart to have at a family reunion than this one. It will help everyone know how they are related to each other.',
            image: fivegen,
            type: 'descendant',
            price: '15.95',
            size: '14 inches x 25 inches',
            amazon: 'https://www.amazon.com/s?k=B0140ME6DU&camp=1789&creative=9325&linkCode=xm2&linkId=0409fc14352b37a03a3c8246fa46bfab&tag=misbach&ref=as_li_qf_sp_sr_il_tl'
        },
        {
            product: 'Pedigree Chart',
            description: 'This is your traditional pedigree chart. It holds up to 6 generations in the familiar standard format. The one difference being that this chart has room for one generation of descendants. There are fields that allow you to link from one chart to another. (This chart allows you to fill it out in Acrobat before printing).',
            image: freeped,
            type:'pdf',
            price: 'Free',
            size: '8.5 inches x 11 inches',
            download: pedigreepdf
        },
        {
            product: '5 Generation Pedigree Chart',
            description: 'This 5 generation chart is packed with a lot of information, but kept clean for easy readability. It contains space for the spouse of the starting person as well as the children of the starting couple. This chart provides space to record 4 generations of ancestors and one generation of descendants (children), to make up a total of 5 generations. It is the perfect chart for those looking for a portrait oriented chart that fits nicely in a 3-ring binder. This chart is an "interactive" PDF chart that can either be printed out on your printer and filled in by hand, or can be edited on your computer using the free version of Adobe Acrobat. The chart can be saved with your genealogical data to a file and can be shared with others.',
            image: freefive,
            type: 'pdf',
            price: 'Free',
            size: '8.5 inches x 11 inches',
            download: fivegenpdf
        },
        {
            product: 'Picture Pedigree Chart',
            description: 'This Picture Pedigree Chart packs a lot of information in one sheet. There is no other chart on the market that fits 6 generations of pictures this size. This chart is great for getting to know your ancestors. You can use this to teach your children about their family tree. This is a good chart to take to family reunions.',
            image: freepicture,
            type: 'pdf',
            price: 'Free',
            size: '8.5 inches x 11 inches',
            download: picturepdf
        },
        {
            product: 'Bowtie Chart',
            description: 'This is very similar to the Fan chart, but each side is spread out for visual effect. It clearly separates maternal and paternal ancestral lines. There are fields that allow you to link from one chart to another',
            image: freebowtie,
            type:'pdf',
            price: 'Free',
            size: '8.5 inches x 11 inches',
            download: bowtiepdf
        },
        {
            product: 'Kids Chart',
            description: 'Finally a genealogy chart made specially for kids. This chart is small in generations but large in size, making it easy to read and fill out. This is the perfect chart to help kids learn about where they came from. This Chart is perfect for the classroom or home. It works for all ages of children, even if they do not know how to read',
            image: freekids,
            type: 'pdf',
            price: 'Free',
            size: '8.5 inches x 11 inches',
            download: kidspdf
        },
        {
            product: 'Family Tree Chart',
            description: "This a very unique tree chart design that holds up to 6 generations in a tree shape. You can follow ancestral lines by following the branches. The mother and father's names are placed on the large branches with the children on the trunk. All the ancestors are placed on the leaves in the upper tree. The fathers are placed on the shaded leaves and the Mothers are placed on the white leaves",
            image: freetree,
            type: 'pdf',
            price: 'Free',
            size: '8.5 inches x 11 inches',
            download: familytreepdf
        },
        {
            product: "Grandma's Box Chart",
            description: 'This is an original chart was designed by "Grandma" Misbach. In traditional pedigree charts its easy to get lost. This chart is lined up in a way that makes it easy to see and follow surname ancestral lines. Each surname line is represented horizontally across the page. This chart holds up to 6 generations. There are fields that allow you to link from one chart to another',
            image: freebox,
            type: 'pdf',
            price: 'Free',
            size: '8.5 inches x 11 inches',
            download: boxpdf
        },
        {
            product: 'Fan Chart (6 generations)',
            description: 'This is your traditional Fan style chart. We have room for one generation of descendants. This chart holds up to 6 generations. There are fields that allow you to link from one chart to another',
            image: freefan,
            type: 'pdf',
            price: 'Free',
            size: '8.5 inches x 11 inches',
            download: fanchartpdf
        },
        {
            product: 'Race Horse Thoroughbred Pedigree Chart',
            description: 'For those of you who breed horses, this chart is for you. You can print this chart to fill out by hand, or fill out the chart right in Acrobat and then print.',
            image: freehorse,
            type: 'pdf',
            price: 'Free',
            size: '8.5 inches x 11 inches',
            download: horsepdf
        },
        {
            product: 'Family Group Record Sheet',
            description: 'A very popular chart among genealogists. You can look far and wide on the Internet for a better Family Group Record/Sheet and not find it. The layout is simple, clean, elegant, and easy to read. It provides space for up to 8 children. This chart is an "interactive" PDF chart that can either be printed out on your printer and filled in by hand, or can be edited on your computer using the free version of Adobe Acrobat. The chart can be saved with your genealogical data to a file and can be shared with others.',
            image: freefamily ,
            type: 'pdf',
            price: 'Free',
            size: '8.5 inches x 11 inches',
            download: familygrouppdf
        },
    ])

    useEffect(()=>{
        setFilteredItems(itemState);
    }, [itemState])
  
    
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
        <div className='chart-page'>
            <Menu />
            <div className = 'div2'>

                <div className = 'search-dropdown'>
                    <div className='search'>
                        <p>Filter by</p>
                    </div>
                    <div className = 'search-buttons'>
                        <button className='search-tab' onClick={filterSeeAll}>All</button>
                        <button className='search-tab' onClick={filterPedigree}>Pedigree</button>
                        <button className='search-tab' onClick={filterDescendants}>Descendant</button>
                        <button className='search-tab' onClick={filterPDF}>Free PDF</button>
                    </div>
                </div>          
                <div className = 'chart-content'>
                        {filteredItemsState && filteredItemsState && 
                            <div className = 'category'>
                                
                            {filteredItemsState.map(function filter(item, index){
                                return <Card amazon={filteredItemsState[index].amazon} text={filteredItemsState[index].product} image={filteredItemsState[index].image} description = {filteredItemsState[index].description} price={filteredItemsState[index].price} size={filteredItemsState[index].size} download = {filteredItemsState[index].download} />
                            })}
                                
                            </div>
                        } 
                </div>       
            </div>
            
        </div>
    )
}