import React from 'react'
import './style.css'
import SubscribeForm from '../subscribeForm'
import useItemStore from '../../store/store'


export default function Modal({ isModalVisible }) {

  const toggleModalVisible = useItemStore((state) => state.toggleModalVisible)

  const handleClick = (event) => {
    // prevent event propagation 
    event.stopPropagation()
  }

  return (
    <div onClick={toggleModalVisible} className='modal' style={{ display: isModalVisible ? 'block' : 'none' }}>
      <div onClick={handleClick}>
        <SubscribeForm />
      </div>
    </div>
  )
}
