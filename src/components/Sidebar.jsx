import React,{useState} from 'react'
import {FaRegChartBar,FaThList, FaShoppingBag, FaTh, FaUserAlt, FaBars,} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import admin from '../../src/images/admin.jpg'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen]=useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"DASHBOARD",
            icon:<FaTh/>
        },
        {
            path:"/MyProfile",
            name:"My Profile",
            icon:< FaRegChartBar/>
        },
        {
            path:"/OrganizatonDetails",
            name:"Organizaton Details",
            icon:<FaUserAlt/>
        },
        {
            path:"/OrganizationChart",
            name:"Organization Chart",
            icon:<FaThList/>
        },
        {
            path:"/GraphConfiguration",
            name:"Graph Configuration",
            icon:<FaShoppingBag/>
        },
        {
            path:"/NotificationSettings",
            name:"Notification Settings",
            icon:<FaThList/>
        },
        {
            path:"/ConfigurationSettings",
            name:"Configuration Settings",
            icon:<FaShoppingBag/>
        }
    ]


  return (
    <div className='container'>
      <div style={{width:isOpen ? "220px":"50px"}} className='sidebar'>
        <div className='top_section'>
            
            <div style={{marginLeft:isOpen ? "10px":"0px"}} className='bars'>
                <FaBars onClick={toggle}/>
            </div>
            <h1 style={{display:isOpen ? "block":"none"}} className='logo'>Cooperate Performance</h1>
            <img src={admin} style={{display:isOpen ? "block":"none"}} className='admin'></img>
            <span style={{display:isOpen ? "block":"none"}} className='posision'>DEPARTMENT HEAD</span>
            <span style={{display:isOpen ? "block":"none"}} className='adminname'>Mr. Mickey</span>
        </div>
        {
            menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className='icon'>{item.icon}</div>
                    <div style={{display:isOpen ? "block":"none"}} className='link-text'>{item.name}</div>
                </NavLink>
            ))
        }
      </div>

      <div className='contents'>
      <main>{children}</main>
      </div>
      
    </div> 
  )
}

export default Sidebar
