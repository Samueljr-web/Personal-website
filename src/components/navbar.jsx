import React, { useState } from 'react';
import { FaBars,FaTimes  } from 'react-icons/fa';
import {Logo, Icon} from '../data/navdata';
import '../styles/Navbar.css';


function Navbar() {
   // for bars and times icon toggle
     const [ Click, setClick ] = useState(true);
     const ClickHandler = () => {
         setClick(!Click)
     }
     //

     // change nav on scrollY >= 50
     const [nav, setnav] = useState(false);
     const changeNav = () =>{
        if(window.scrollY >= 50){
            setnav(true)
        }else{
            setnav(false)
        }
     }
     window.addEventListener('scroll', changeNav)
    return (
         
            <nav className={nav ? "nav-active" : "nav"}>
             <label>{Icon}{Logo}</label>
                <ul onClick={ClickHandler} className={Click ? "right" : "left"}>
                <li onClick={ClickHandler}>
                        <a href="/" className="active" style={{
                        color: "#fbbc05",
                        borderBottom:"3px solid #fbbc05",
                       }}>Home</a>
                    </li>
                    <li onClick={ClickHandler}><a href="#about">About</a></li>
                    <li onClick={ClickHandler}><a href="#project">Blog</a></li>
                    <li onClick={ClickHandler}><a href="#contact">Contact</a></li>
                </ul>
                <button className="bars" onClick={ClickHandler}>
                   {Click ? <FaBars style={{fontSize: "1.7em"}}/> : <FaTimes style={{fontSize: "1.7em"}}/>}
               </button>
            </nav>
    
    )
}

export default Navbar;