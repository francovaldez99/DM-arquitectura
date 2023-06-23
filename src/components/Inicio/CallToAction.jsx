import React from 'react';
import './CallToAction.css';
import Nav from '../Nav/Nav';


const CallToAction = () => {
  return (
    <div className="inicio-container">
      <Nav />
      <section className="cta-container">
        <div className='cta-div'>
          <h2 className="cta-title" id="inicio">
            ¿Necesitas servicios de arquitectura y asesoramiento?
          </h2>
          <p className="cta-description">
            Estamos aquí para ayudarte a hacer realidad tus proyectos
            arquitectónicos. Contáctanos hoy para obtener una consulta gratuita.
          </p>
          <a href="#contacto" className="cta-button">
            ¡Contáctanos ahora!
          </a>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
