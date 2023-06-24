import React from "react";
import "./Servicios.css";
import {MdOutlineArchitecture} from "react-icons/md"
import {VscTools} from "react-icons/vsc"
import {ImPencil2} from "react-icons/im"
import {AiFillCheckCircle} from "react-icons/ai"
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
                <li> <h3><span><AiFillCheckCircle/></span>  Boceto inicial.</h3></li>
              <li><h3><span><AiFillCheckCircle/></span>  Diseño  plano en software.</h3></li>
              <li><h3><span><AiFillCheckCircle/></span>  Proceso de presentación y entrega el servicio.</h3></li>
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
            <li><h3><span><AiFillCheckCircle/></span>  Evaluación y planificación personalizada.</h3></li>
            <li><h3><span><AiFillCheckCircle/></span>  Diseño innovador y creativo.</h3></li>
            <li><h3><span><AiFillCheckCircle/></span>  Ejecución impecable y resultados excepcionales.</h3></li>
        
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
                <li><h3><span><AiFillCheckCircle/></span>  Evaluación personalizada del espacio.</h3></li>
                <li><h3><span><AiFillCheckCircle/></span>  Diseño creativo. </h3></li>
                <li><h3><span><AiFillCheckCircle/></span>  Implementación profesional y transformación del espacio.</h3></li>
              </ul>
            </div>
          </article>
        </article>
            </div>
      </div>
  );
}

export default Servicios;
