import React, { useRef } from 'react'
import './style.css'
import { Link } from 'react-router-dom' 
import MenuButton from './components/menuButton'
import Modal from '../modal'
import ResponsiveMenu from './components/responsiveMenu'
import SubscribeButton from '../modal/components/subscribeButton'
import useItemStore from '../../store/store'


export default function Navbar() {

  const menuVisible = useItemStore((state) => state.itemVisible)
  const modalVisible = useItemStore((state) => state.modalVisible)
  const toggleMenuVisible = useItemStore((state) => state.toggleItemVisible)

  const menuButtonRef = useRef(null)

  const handleLinkClick = () => {
    toggleMenuVisible()
  }

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
          <SubscribeButton />
          <MenuButton menuVisible={menuVisible} handleMenuClick={toggleMenuVisible} menuButtonRef={menuButtonRef} />
        </ul>
      </nav>
      <ResponsiveMenu 
        isVisible={menuVisible} 
        handleLinkClick={handleLinkClick} 
      />
      <Modal 
        isModalVisible={modalVisible} 
      />
    </>
  )
}