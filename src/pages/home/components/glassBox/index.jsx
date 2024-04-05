import React from 'react'
import './style.css'
import { ArrowCircleUpRight } from 'phosphor-react'


export default function GlassBox() {
  return (
    <div className="glass-box-wrapper">
      <div className="glass-box-container">
        <h4>The Pacifica Tech Education Charity. </h4>
        <h2>There's no better time for Islanders than <span>NOW!</span></h2>
        <a href='https://www.pasifikateched.net/ ' target="_blank">
          Learn More&nbsp; 
          <ArrowCircleUpRight size={23} />
        </a>
      </div>
      <img src="/image2.png" alt="" />
    </div>
  )
}
