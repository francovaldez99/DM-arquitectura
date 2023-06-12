import React from 'react'
import "./BurguerButton.css"
function BurguerButton({clicked,handleClick}) {
  return (
    <div>
           <div className={`menu-burguer ${clicked?'open':null}`} onClick={handleClick}>
    <div className="menu-line"></div>
    <div className="menu-line"></div>
    <div className="menu-line"></div>
  </div>
  </div>
  )
}

export default BurguerButton