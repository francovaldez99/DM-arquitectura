import logo from "../../assets/Recurso 1.svg"
import React from 'react'
import { useState  } from 'react'
import "./Nav.css"
import {FaBars,FaTimes} from "react-icons/fa"
function Nav() {
  const [isOpen,SetIsOpen]=useState(false)
  function changeStatusOpen() {
    SetIsOpen(!isOpen)

  }
  return (
    <div className='nav-container'>
      <a href='#inicio'><img  className='logo-img' src={logo} alt="logo-DM" /></a>
            <nav className={`nav ${isOpen? "responsive-nav":""}`}>
            <button className='nav-btn nav-close-btn' onClick={changeStatusOpen}>
                <FaTimes/>
            </button>
                <a href="#inicio" className='nav-item'  onClick={changeStatusOpen}>Inicio</a>
                <a href="#servicios" className='nav-item'  onClick={changeStatusOpen}>Servicios</a>
                <a href="#proyectos" className='nav-item'  onClick={changeStatusOpen}>Proyectos</a>
                <a href="#nosotros" className='nav-item'  onClick={changeStatusOpen}>Nosotros</a>
                <a href="#contacto" className='nav-item '  onClick={changeStatusOpen}>Contactos</a>


            </nav>

            <button  className="nav-btn" onClick={changeStatusOpen}>
              <FaBars/>
            </button>
    </div>
  )
}

export default Nav