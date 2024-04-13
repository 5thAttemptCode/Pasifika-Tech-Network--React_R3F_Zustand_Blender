import React, { useEffect } from 'react'
import './style.css'
import { DotsThreeOutline, DotsThreeOutlineVertical } from 'phosphor-react'


export default function MenuButton({ menuVisible, handleMenuClick, menuButtonRef }) {

  const handleOutsideClick = (event) => {
    if (menuVisible && !event.target.closest('.responsive-menu') && event.target !== menuButtonRef.current) {
      handleMenuClick()
    }
  }
    
  useEffect(() => {
    window.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [menuVisible, menuButtonRef])

  return (
    <button ref={menuButtonRef} onClick={handleMenuClick} className='menu-button'>
      Menu &nbsp; 
      {!menuVisible? 
        <DotsThreeOutline className='icon' size={20} /> 
        : 
        <DotsThreeOutlineVertical className='iconSecondary' size={20} />
      }
    </button>
  )
}