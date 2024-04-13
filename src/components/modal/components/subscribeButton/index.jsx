import React from 'react'
import './style.css'
import useItemStore from '../../../../store/store';


export default function SubscribeButton() {

    const toggleItemVisible = useItemStore((state) => state.toggleModalVisible)

    const handleSubscribeClick = () => {
        toggleItemVisible()
      }

  return (
    <button className='subscribe' onClick={handleSubscribeClick}>
        Subscribe
    </button>
  )
}
