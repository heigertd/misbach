import React, {useState, useEffect} from 'react'
import logo from '../../images/logo.png'
import './header.css'
// TODO: add conditional rendering for menu

export default function Header() {
    const [dropDownState, setDropDownState] = useState([]);

    useEffect(()=>{
        setDropDownState('');
    },[])

    function dropDown(){
        setDropDownState('true')   
    }
    function close(){
        setDropDownState('')   
    }

    return (
        <div className = 'head'>
            <img className = 'image' src={logo} alt='logo'/>
            <div className = 'nav-bar'>
                <a href='/' className = 'tab'>Home</a>
                <a href='/charts' className = 'tab'>Charts</a>
                <a href='/about-contact' className = 'tab'>About</a>
            </div>
            <button className='dropdown-button' onClick={dropDown}> --- </button>  
        </div>
        // { dropDownState?
        //     (<div className = 'head'>
        //             <div className = 'nav-bar'>
        //                 <a href='/' className = 'tab'>Home</a>
        //                 <a href='/charts' className = 'tab'>Charts</a>
        //                 <a href='/about-contact' className = 'tab'>About</a>
        //             </div>
        //             <button onClick={close}>X</button>    
        //     </div>)
        //     :
        //     (<div className = 'head'>
        //             <img className = 'image' src={logo} alt='logo'/>
        //             <div className = 'nav-bar'>
        //                 <a href='/' className = 'tab'>Home</a>
        //                 <a href='/charts' className = 'tab'>Charts</a>
        //                 <a href='/about-contact' className = 'tab'>About</a>
        //             </div>
        //             <button className='dropdown-button' onClick={dropDown}> --- </button>  
        //     </div>)
            
        // }
    )
}


