import React from 'react'
import './style.css'


export default function Modal({ isModalVisible }) {

  return (
    <div className='modal' style={{ display: isModalVisible ? 'block' : 'none' }}>
      
    </div>
  )
}
