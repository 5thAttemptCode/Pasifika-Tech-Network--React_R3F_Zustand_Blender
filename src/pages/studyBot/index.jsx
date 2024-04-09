import React from 'react'
import SubHeader from '../../components/subHeader'
import SubHeaderSecondary from '../../components/subHeaderSecondary'
import TabWrapper from './components/tabWrapper'

export default function StudyBot() {
  return (
    <main>
      <SubHeader text="StudyBot FAQ" />
      <SubHeaderSecondary text="FAQ for the Discord Study Centre StudyBot." />
      <TabWrapper />
    </main>
  )
}
