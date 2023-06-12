import React from 'react';
import './CallToAction.css';


const CallToAction = () => {
  return (<div className='inicio-container' >
      
        <section className="cta-container">
          <h2 className="cta-title" id='inicio'>¿Necesitas servicios de arquitectura y asesoramiento?</h2>
          <p className="cta-description">
            Estamos aquí para ayudarte a hacer realidad tus proyectos arquitectónicos. Contáctanos hoy para obtener una consulta gratuita.
          </p>
          <button href="mailto:diegomongelos196@gmail.com" className="cta-button">
            ¡Contáctanos ahora!
          </button>
        </section>
  </div>
  );
};

export default CallToAction;
