import React,{useRef,useState} from "react";
import "./ContactMe.css";
import { AiOutlinePhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import {FiInstagram} from "react-icons/fi"
import emailjs from '@emailjs/browser';


function Loader() {
  return (
    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="40px" height="40px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40" xmlSpace="preserve">
      <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
      <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
        C22.32,8.481,24.301,9.057,26.013,10.047z">
        <animateTransform attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="0.5s"
          repeatCount="indefinite"/>
      </path>
    </svg>
  );
}

const ContactMe = () => {
  const form = useRef();
  const YOUR_SERVICE_ID=process.env.REACT_APP_YOUR_SERVICE_ID
  const  YOUR_TEMPLATE_ID =process.env.REACT_APP_YOUR_TEMPLATE_ID
  const YOUR_PUBLIC_KEY =process.env.REACT_APP_YOUR_PUBLIC_KEY
  const [Clicked, SetClicked] = useState(false)

  const handlerSubmit = (e)=>{
    e.preventDefault()
    SetClicked(true)
    setTimeout(() => {
      SetClicked(false)
    }, 1000);
    if(!YOUR_PUBLIC_KEY || !YOUR_TEMPLATE_ID || !YOUR_SERVICE_ID){
      console.log("algo salio mal en las variables de entorno");
      return
    }
    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);

        form.current.reset();
        alert("Mensaje enviado")

    }, (error) => {
        console.log(error.text);
        alert("Fallo al enviar mensaje")

    });
  }
  
  return (
    <>
      <h2 className="contact-title" id="contacto">
        Contactanos
      </h2>
      <div className="contact-container">
        <article className="contact-area-text">
          <div>
            <h2>
              ¡Contáctanos ahora mismo para recibir asesoramiento y obtener un
              presupuesto para tu proyecto!
            </h2>
          </div>

          <div className="botones-contactos-telefonos">
            <h3>
              <AiOutlinePhone /> +54 9 3513 22-1097
            </h3>
            <h3>
              <AiOutlinePhone /> +54 9 3775 63-9144
            </h3>
          </div>
          <div>
            <h3>
              <a
                href="https://wa.me/5493513221097"
                target="_blank"
                rel="noreferrer"
                className="contactanos-por-whatsaapp"
              >
                <BsWhatsapp /> Contactanos por whatsapp
              </a>
            </h3>
          </div>
          <div>
          <h3>
              <a
                href="https://www.instagram.com/dymarquitectura/"
                target="_blank"
                rel="noreferrer"
                className="contactanos-por-whatsaapp"
              >
                <FiInstagram /> Contactanos por Instagram
              </a>
            </h3>
          </div>

        </article>

        <form ref={form} className="contact-area-form" onSubmit={handlerSubmit}>
          <h2>Envianos un mail</h2>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="user_name" />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input type="text" id="email" name="user_email" />
          </div>

          <div>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="message"></textarea>
          </div>
          <button className="cta-button enviar">
            {Clicked ? <Loader /> : "Enviar"}
          </button>

          <div></div>
        </form>
      </div>
    </>
  );
};

export default ContactMe;
