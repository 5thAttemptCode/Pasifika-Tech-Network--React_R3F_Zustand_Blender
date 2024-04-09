import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import ResponsiveMenu from './components/responsiveMenu'
import { Link } from 'react-router-dom' 
import { DotsThreeOutline, DotsThreeOutlineVertical } from 'phosphor-react'


export default function Navbar() {

  const [ menuVisible, setMenuVisible ] = useState(false)
  const menuButtonRef = useRef(null)

  const handleLinkClick = () => {
    setMenuVisible(false)
  }

  const handleOutsideClick = (event) => {
    if (menuVisible && !event.target.closest('.responsive-menu') && event.target !== menuButtonRef.current) {
      setMenuVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [menuVisible])

  return (
    <>
      <nav>
        <Link className='logo' to="/">
          <div>
            <img src="https://pasifikatechnetwork.github.io/img/ptn-logo-trans.png" />
          </div>
          Pasifika Tech Network
        </Link>
        <ul>
          <a href="https://discord.com/" target="_blank">Discord</a>
          <button ref={menuButtonRef} onClick={() => setMenuVisible(prev => !prev)}>
            Menu &nbsp; 
            {!menuVisible ? 
              <DotsThreeOutline className='icon' size={20} /> 
              : 
              <DotsThreeOutlineVertical  className='iconSecondary' size={20} />
            }
          </button>
        </ul>
      </nav>
      <ResponsiveMenu 
        isVisible={menuVisible} 
        handleLinkClick={handleLinkClick} 
      />
    </>
  )
}