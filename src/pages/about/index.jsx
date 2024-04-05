import React from 'react'
import './style.css'
import AboutData from '../../components/data/aboutData'
import ContentBox from '../../components/contentBox'
import SubHeader from '../../components/subHeader'

export default function About() {
  return (
    <main>
      <SubHeader text="Who are we?" />
      <div className="wrapper">
        <div className="data">
          <h3>A community of IT professionals connected by the sea and not divived by land.</h3>
        </div>
        <div className="data">
          {AboutData.map((item) => (
            <ContentBox key={item.id}>
              {item.aboutData}
            </ContentBox>
          ))}
        </div>
        
      </div>
    </main>
  )
}



{/* <SubHeader text="The Pasifika Technology Education Charity" />
      <ContentBox>
        The Pasifika Technology Education Charity is a non-profit organisation that helps Pacific Islander communities gain technical skills and practical knowledge in the technology industry through hands-on experiences and mentorship from Pasifika professionals working in technology.
      </ContentBox> */}