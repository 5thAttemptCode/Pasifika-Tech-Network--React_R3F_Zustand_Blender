import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import SubscribeForm from '../../../subscribeForm'


export default function ResponsiveMenu({ isVisible, handleLinkClick }) {
  
  return (
    <div className='responsive-menu' style={{ right: isVisible ? '4vw' : '-100%' }}>
      <ul>
        <NavLink onClick={handleLinkClick} to="/">Home</NavLink>
        <NavLink onClick={handleLinkClick} to="/about">About Us</NavLink>
        <NavLink onClick={handleLinkClick} to="/studybot">StudyBot</NavLink>
        <NavLink onClick={handleLinkClick} to="/contact">Contact</NavLink>
      </ul>
      <SubscribeForm />
    </div>
  )
}



        {/* <a onClick={handleLinkClick}  
          href="https://github.com/pasifikatechnetwork/pasifikatechnetwork.github.io" 
          target="_blank"
        >
          Github&nbsp; 
          <div><ArrowSquareOut size={18} /></div>
        </a> */}