import React, { useState } from "react";
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import { GrClose } from "react-icons/gr";
import {Sidebar} from './Sidebar'
import  './Navi.css'
import { IconContext } from "react-icons/lib";
import { CgProfile } from "react-icons/cg";


const Navi=()=>{
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = ()=> setSidebar(!sidebar)
    return(
        <>
        <IconContext.Provider value={{color:'gray'}}>
        <div className="navbar" style={{position:'relative'}}>
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/> 
            </Link>
            
            <Link to="#" className="menu-barl">
            <CgProfile/>  <AiIcons.AiOutlineLogin/>
            </Link>
           
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}  >
            <ul className="nav-menu-items">
            <li className="navbar-toggle" >
            <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar}/>
            </Link>
            </li>
            {Sidebar.map((item, index)=>{
                return(
               <li key={index} className={item.cName}>
                 <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>     
                </Link>  
                 </li>
                )
            })}
            </ul>
            
        </nav></div>
        </IconContext.Provider>
        </>
    )
}

export default Navi