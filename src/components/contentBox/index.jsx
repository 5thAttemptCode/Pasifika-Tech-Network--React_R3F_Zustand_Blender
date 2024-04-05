import React from 'react'
import './style.css'


export default function ContentBox({ children }) {
  return (
    <p className='content-box-p'>{children}</p>
  )
}
