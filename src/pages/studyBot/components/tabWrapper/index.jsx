import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import Tab from '../tab'
import StudyBotData from '../../../../components/data/studyBot'


export default function TabWrapper() {

    //Handle open/close
    const [ openTab, setOpenTab ] = useState(null)

    const handleOpen = (index) => {
      if (openTab === index) {
        setOpenTab(null)
      } else{
        setOpenTab(index)
        window.scrollTo(0, 0)
      }
    }

    const handleClose = () => {
      setOpenTab(null)
    }

    //Handle outside click
    const tabRef = useRef()

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (tabRef.current && !tabRef.current.contains(event.target)) {
          handleClose()
        }
      }
      document.addEventListener("mousedown", handleClickOutside)

      return () => {
          document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [])

    return (
      <div ref={tabRef} className='tab-wrapper'>
        {StudyBotData.map((data, index) => (
          <Tab 
            key={index}
            index={index}
            data={data}
            isOpen={openTab === index}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        ))}
      </div>
    )
}
