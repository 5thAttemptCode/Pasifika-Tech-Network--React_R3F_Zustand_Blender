import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ArrowSquareOut } from 'phosphor-react'

export default function Navbar() {
  return (
    <nav>
      <Link className='logo' to="/">
        <div>
            <img src="https://pasifikatechnetwork.github.io/img/ptn-logo-trans.png" alt="" />
        </div>
        Pasifika Tech Network
      </Link>
      <ul>
        <Link to="/">Subscribe</Link>
        <Link to="/about">About Us</Link>
        <a href="https://github.com/pasifikatechnetwork/pasifikatechnetwork.github.io" target="_blank">
          Github&nbsp; 
          <div><ArrowSquareOut size={18} /></div>
        </a>
      </ul>
    </nav>
  )
}
