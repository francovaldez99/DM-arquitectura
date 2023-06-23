import React from "react";
import "./Servicios.css";
import {MdOutlineArchitecture} from "react-icons/md"
import {VscTools} from "react-icons/vsc"
import {ImPencil2} from "react-icons/im"
function Servicios() {
  return (
      <div>
        <h2 className="servicios-head" id="servicios">Servicios</h2>
            <div className="servicios-box">
        <article className="servicios-container">
          <article className="servicio-article-container servicio-1">
            <h2 className="servicio-title-container">
            Plano
              <span><MdOutlineArchitecture/></span>
            </h2>
            <div  className="text-servicio">
              <ul style={{listStyle:"inherit",textAlign:"left"}}>
                <li> <h3>Boceto inicial.</h3></li>
              <li><h3>Diseño  plano en software.</h3></li>
              <li><h3>Proceso de presentación y entrega el servicio.</h3></li>
              </ul>
            </div>
          </article>
          <article className="servicio-article-container servicio-2">
            <h2 className="servicio-title-container">
            Refacción
              <span><VscTools/></span>
            </h2>
            <div className="text-servicio">
          <ul>
            <li><h3>Evaluación y planificación personalizada.</h3></li>
            <li><h3>Diseño innovador y creativo.</h3></li>
            <li><h3>Ejecución impecable y resultados excepcionales.</h3></li>
        
          </ul>
            </div>
          </article>
          <article className="servicio-article-container servicio-3">
            <h2 className="servicio-title-container">
            Interiorismo
              <span><ImPencil2/></span>
            </h2>
            <div className="text-servicio">
              <ul>
                <li><h3>Evaluación personalizada del espacio.</h3></li>
                <li><h3>Diseño creativo. </h3></li>
                <li><h3>Implementación profesional y transformación del espacio.</h3></li>
              </ul>
            </div>
          </article>
        </article>
            </div>
      </div>
  );
}

export default Servicios;
