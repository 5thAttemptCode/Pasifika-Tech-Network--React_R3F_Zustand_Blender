import React from 'react'
import './style.css'
import SubHeaderSecondary from '../subHeaderSecondary'
import { ArrowRight } from 'phosphor-react'


export default function SubscribeForm({ infoMessage = false, message = "Subscribe to our monthly newsletter!" }) {
  return (
    <div className="form-container">
      <SubHeaderSecondary text="Subscribe to our Newsletter" />
      { infoMessage && <p>{message}</p> }
      <form>
        <input type="email" placeholder='Your Email' />
        <button><ArrowRight size={25} /></button>
      </form>
    </div>
  )
}
