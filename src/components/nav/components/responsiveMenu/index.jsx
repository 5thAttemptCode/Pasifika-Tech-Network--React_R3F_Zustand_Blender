import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'


export default function ResponsiveMenu({ isVisible, handleLinkClick }) {
  
  return (
    <div className='responsive-menu' style={{ right: isVisible ? '4vw' : '-100%' }}>
      <ul>
        <NavLink onClick={handleLinkClick} to="/">Home</NavLink>
        <NavLink onClick={handleLinkClick} to="/about">About Us</NavLink>
        <NavLink onClick={handleLinkClick} to="/studybot">StudyBot</NavLink>
        <NavLink onClick={handleLinkClick} to="/contact">Contact</NavLink>
        {/* <a onClick={handleLinkClick}  
          href="https://github.com/pasifikatechnetwork/pasifikatechnetwork.github.io" 
          target="_blank"
        >
          Github&nbsp; 
          <div><ArrowSquareOut size={18} /></div>
        </a> */}
      </ul>
      <div className="subscribe">
        <p>Subscribe to our newsletter</p>
        <input type="text"/>
      </div>
    </div>
  )
}
