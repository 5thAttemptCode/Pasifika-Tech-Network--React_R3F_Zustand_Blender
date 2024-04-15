import React from 'react'
import './style.css'
import SubHeader from '../../components/subHeader'
import SubHeaderSecondary from '../../components/subHeaderSecondary'
import { DiscordLogo, GithubLogo, YoutubeLogo } from 'phosphor-react'


export default function Contact() {
  return (
    <main className='contact'>
      <SubHeader text="Get in touch" />
      <div className="contact-wrapper">
        <div className="mail">
          <SubHeaderSecondary text="Send us an email" />
          <h4>contact@pasifikateched.net</h4>
        </div>
        <div className="other-contact">
          <SubHeaderSecondary text="Find us also here" />
          <a href="https://www.youtube.com/@TechNesianLiveStream" target="_blank">Youtube &nbsp; <YoutubeLogo size={22} /></a>
          <a href="https://discord.com/" target="_blank">Discord &nbsp; <DiscordLogo size={22} /></a>
          <a href="https://github.com/pasifikatechnetwork/pasifikatechnetwork.github.io" target="_blank">GitHub &nbsp; <GithubLogo size={22} /></a>
        </div>
      </div>
    </main>
  )
}
