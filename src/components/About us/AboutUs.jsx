import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="company-presentation" id="nosotros">
        <h2>Nosotros</h2>
        <p className="company-presentation-text">
          Somos un equipo de estudiantes avanzados .
          <br /> Nos apasiona la arquitectura y ofrecemos
          servicios y asesoramiento personalizados. Trabajamos estrechamente con
          nuestros clientes para convertir sus ideas en proyectos
          arquitectónicos impresionantes. Valoramos la creatividad, la
          funcionalidad y la sostenibilidad en cada proyecto que emprendemos.
          Dejanos ayudarte a hacer realidad tus sueños arquitectónicos!
        </p>
      </div>
      {/* <h2>Nuestro equipo</h2> */}
      <div className="team">
        <div className="architect">
          <h3>Diego Mongelós</h3>
          <div className="presentacion-container">
            <div className="architect-perfil">
              <img
                src="https://res.cloudinary.com/db3bcqim6/image/upload/v1686620541/diego/FOTOS%20Para%20pag/1653883085694_itmn3d-Profile.jpg_gnm4zc-Grayscale_vwjpxs.png"
                alt=""
              />
            </div>
            <p className="presentacion-architect">
              "A lo largo de mi trayectoria como estudiante de arquitectura, he
              tenido el privilegio de colaborar en diversos proyectos, desde
              pequeñas residencias hasta grandes complejos urbanos. Cada
              proyecto ha sido una oportunidad para explorar nuevas ideas,
              abordar desafíos y plasmar soluciones innovadoras. En mi enfoque,
              busco siempre entender las necesidades y aspiraciones de mis
              clientes, así como el contexto en el que se desenvolverá la
              edificación. Con esto en mente, creo espacios que reflejan la
              identidad de quienes los habitan y se integran de manera armoniosa
              con su entorno. Además de mi experiencia en diseño arquitectónico,
              también he trabajado en la gestión de proyectos, asegurando que
              cada etapa se desarrolle de manera eficiente y dentro de los
              plazos establecidos. Mi compromiso con la excelencia y la atención
              al detalle se refleja en cada uno de mis trabajos."
            </p>
            <a
              href="https://www.linkedin.com/in/diego-mongel%C3%B3s-9a07b5239/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="linkedin-button">Ir a LinkedIn</button>
            </a>
          </div>
        </div>

        <div className="architect">
          <h3>Matías Izquierdo </h3>
          <div className="presentacion-container">
            <div className="architect-perfil">
              <img
                src="https://res.cloudinary.com/db3bcqim6/image/upload/v1686620541/diego/FOTOS%20Para%20pag/1686326866723_jj5jvq_sj0wzh-Profile_iceufu-Grayscale_iukfy6.png"
                alt=""
              />
            </div>
            <p className="presentacion-architect">
              "Como desarrollador frontend, poseo una habilidad innata para el
              diseño y una sólida formación en arquitectura. Mi pasión radica en
              fusionar la tecnología con una estética impecable, al igual que se
              logra en un edificio diseñado con maestría. Permíteme ayudarte a
              llevar tu proyecto al siguiente nivel, creando soluciones
              tecnológicas que no solo sean visualmente atractivas, sino también
              intuitivas y eficientes. Estoy comprometido con la excelencia en
              cada aspecto de mi trabajo y estoy constantemente actualizando mis
              habilidades para mantenerme al tanto de las últimas tendencias y
              tecnologías del desarrollo frontend y arquitectóni Si buscas un
              profesional apasionado y altamente capacitado que pueda dar vida a
              tus ideas con un enfoque fusionado de diseño y programación, no
              dudes en contactarme. Juntos, podemos crear algo realmente
              extraordinario. "
            </p>
            <a
              href="https://www.linkedin.com/in/mat%C3%ADas-ezequiel-izquierdo-itterman-922a07239/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="linkedin-button">Ir a LinkedIn </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
