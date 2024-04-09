import React from 'react'
import './style.css'
import { Plus, X } from 'phosphor-react'


export default function Tab({ data, index, isOpen, handleOpen }) {

  const handleButtonClick = () => {
    handleOpen(index)
  }

  return (
    <div className="tab">
      <button onClick={handleButtonClick}>
        {data.question} {!isOpen ? <Plus size={32} /> : <X size={32} />}
      </button>
      {isOpen && 
        <div className='tab-hidden'>
          <h4>{data.title}</h4>
          {data.textImage.map((textImage, index) => (
            <div className='faq-info' key={index}>
              <p>{textImage.text}</p>
              <img src={textImage.image} alt={data.title} />
            </div>
          ))}
        </div>
      }
    </div>
  )
}
