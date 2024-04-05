import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ArrowCircleUpRight } from 'phosphor-react'
import BackgroundCanvas from '../../components/canvas'
import GlassBox from './components/glassBox'


export default function Home() {
  return (
    <main className='home'>
      <BackgroundCanvas />
      <div className="container">
        <h1>Pasifika Tech</h1>
        <h1>Network</h1>
        <p>
          The <span>'Pasifika Tech Network'</span> is a community of IT professionals with a 
          passion for technology and a shared cultural background.
        </p>
        <Link to="/about">
          Learn More&nbsp;
          <ArrowCircleUpRight size={23} />
        </Link>
      </div>
      <div className="container">
       <GlassBox />
      </div>
    </main>
  )
}
