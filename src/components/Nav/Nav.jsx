import React, { useState } from 'react';
import './Nav.css';
import logo from "../../assets/imagenes/Recurso 1@4x.png"
import logodiego from "../../assets/logodiego.svg"
import BurguerButton from './BurguerButton';
const Nav = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
   if (window.innerWidth   < 768) {
     setClicked(!clicked)
     
  }
  }

  return (
    <nav className="nav-container">
  
      <ul className={`nav-list links ${clicked ? 'active':''}`}>
        <li className={`nav-item ${clicked ? 'item-active':''}`}>   <img src={logo} alt="logo"
        width="70px" /></li>
        <li className={`nav-item ${clicked ? 'item-active':''}`}><a href="#inicio" onClick={handleClick}>Inicio</a></li>
        <li className={`nav-item ${clicked ? 'item-active':''}`}><a href="#nosotros" onClick={handleClick}>Nosotros</a></li>
        <li className={`nav-item ${clicked ? 'item-active':''}`}><a href="#servicios" onClick={handleClick}>Servicios</a></li>
        <li className={`nav-item ${clicked ? 'item-active':''}`}><a href="#proyectos" onClick={handleClick}>Proyectos</a></li>

        <li className={`nav-item ${clicked ? 'item-active':''}`}><a href="#contactos" onClick={handleClick}>Contacto</a></li>
        
      </ul>
      <div className='burguer'>
            <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`bg-div initial ${clicked ? 'active':''}`}></div>
    </nav>
      );
};

export default Nav;
