import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import Slider from '../Slider/Slider';

function Card({proyecto}) {
    const [isOpen, SetIsOpen] = useState(false);
    const handleCardClick = () => {
        SetIsOpen(true);
      };
    
      const handleModalClose = () => {
        SetIsOpen(false);
      };
      const handleMouseEnter = (event) => {
        event.target.classList.add('zoomed');
      };
    
      const handleMouseLeave = (event) => {
        event.target.classList.remove('zoomed');
      };
  return (
    <>
        <div key={proyecto.id} className="proyecto-card">
        <div className="image-container">
          <img src={proyecto.imagen} alt={proyecto.titulo}
           className="proyecto-imagen image-zoom"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave} />
        </div>
        <h3 className="proyecto-titulo" onClick={handleCardClick}>{proyecto.titulo}</h3>
        {/* <p className="proyecto-tipo">{proyecto.tipo}</p> */}
          </div>
          <Modal 
          isOpen={isOpen}
          handleModalClose={handleModalClose}
                        >
                            <h2 style={{textAlign:"center"}}>{proyecto.titulo}</h2>
                        <p className='proyecto-tipo'>{proyecto?.texto}</p>
                       {
                        proyecto.carruselImagenes &&
                       
                       <Slider images={proyecto.carruselImagenes}/>
                       } 



                       
                        </Modal>
    </>
  )
}

export default Card