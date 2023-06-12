import React, { useState } from 'react';
import './Proyectos.css';
import Card from './Card';

const proyectosData = [
  {
    id: 1,
    titulo: "Espacio de Coworking-Factory",
    tipo: "Casa",
    texto:
      "Esta fábrica de coworking como tipo de espacio diseñado específicamente para adaptarse a las necesidades de los creadores y creadoras,A diferencia de los espacios de coworking tradicionales, que tienden a orientarse más hacia trabajadores independientes y trabajadores del conocimiento, este ofrece instalaciones y equipos para actividades de fabricación y producción",
    imagen:
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1686435466/diego/Recurso_5_yktoo7.png",
    carruselImagenes: [
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1686435466/diego/Recurso_5_yktoo7.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1686433403/diego/Recurso_2_iovmbs.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1686435480/diego/Recurso_6_kfv5wc.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1686433654/diego/Recurso_3_dil8ho.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1686434823/diego/Recurso_1_iuca6s.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1686434698/diego/imagen_2023-06-10_190455702_x4b4tg.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1686435469/diego/Recurso_8_bruyel.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1686435463/diego/Recurso_9_hmuvya.png"
    ],
  },
  {
    id: 2,
    titulo: "Centro de Educacion Guemes",
    tipo: "Construcción",
    texto:
      "Un espacio multifuncional en el contexto de una escuela refiere a áreas o ambientes dentro de la institución educativa que se puedan utilizar para diferentes propósitos y actividades educativas, Estos espacios están diseñados para ser flexibles y adaptarse a diversas necesidades pedagógicas dentro de una arquitectura nueva,Un espacio multifuncional en el contexto de una escuela refiere a áreas o ambientes dentro de la institución educativa que se puedan utilizar para diferentes propósitos y actividades educativas, Estos espacios están diseñados para ser flexibles y adaptarse a diversas necesidades pedagógicas dentro de una arquitectura nueva.",
    imagen:
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437555/Recurso_15_knjubq.png",
      carruselImagenes:[
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437555/Recurso_15_knjubq.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437543/Recurso_16_b9vtgg.png"
      ]
  },
  {
    id: 3,
    titulo: "Remodelacion vivienda Unifamiliar",
    tipo: "Casa",
    texto:
      "Esta vivienda unifamiliar ofrece la posibilidad de tener un espacio de privacidad personalizado según las necesidades y preferencias de la familia que la habita, Puede variar en tamaño, estilo arquitectónico y distribución interna, dependiendo de la cultura, el entorno y los requisitos locales,Esta vivienda se centra en minimizar su huella ecológica y promover un estilo de vida más sostenible, incorporando aspectos claves como la eficiencia energética,uso de materiales sostenibles, el aprovechamiento de recursos naturales y la reutilización de aguas grises y de lluvias,Un espacio que está diseñado y construido para cumplir ciertos estándares y criterios de calidad que lo hacen adecuado para su propósito específico,Esta vivienda diseñada para ser funcional y adaptarse a las necesidades de los    usuarios, Siempre teniendo en cuenta asoleamientos, ventilación y recursos que hagan a la vivienda más confortable,",
    imagen:
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1686436457/Recurso_10_vmwhey.png",
      carruselImagenes:[
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686436457/Recurso_10_vmwhey.png",
        
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686436431/Recurso_14_ze9wij.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686436431/Recurso_11_ym3e1z.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686436437/Recurso_13_pdvkrs.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686436461/Recurso_12_hoshle.png",
      ]
  },
  {
    id: 4,
    titulo: "Renovacion Fachada",
    tipo: "Construcción",
    texto:"Mediante la renovación de esta fachada logré múltiples objetivos, como mejorar la estética, aumentar el atractivo visual, actualizar el diseño para que se ajuste a los estándares contemporáneos, mejorar la eficiencia energética y corregir problemas estructurales,La incorporación de colores, texturas, e iluminación que en conjunto se adecuen,logran una integración total y renovadora de su exterior,En su estética, diseño y estilo pude implicar cambios en los materiales de revestimiento, la paleta de colores, la forma y las características ornamentales, Es importante destacar que se logró tener en cuenta el estilo arquitectónico del edificio y asegurarse de que la renovación sea coherente con lo existente y armoniosa con el entorno urbano y a la vez cuidando los gustos e intereses de mi cliente.",
        imagen:
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437541/Recurso_18_ktujbu.png",
      carruselImagenes:[
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437541/Recurso_18_ktujbu.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437494/Recurso_17_ekwxcf.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437536/Recurso_19_uwa2gx.png"
      ]
  },
  {
    id: 5,
    titulo: "Diseño parque ecologico y centro de actividades socio cultural",
    tipo: "Casa",
    texto:"Desarrollado con un enfoque ecológico y sostenible. Estos parques están diseñados para promover la conservación ambiental, el uso eficiente de los recursos naturales y la educación sobre temas relacionados con el medio ambiente. Conservación de la biodiversidad: El eco parque incluye áreas verdes con una variedad de especies vegetales y animales para promover la conservación de la biodiversidad local,con senderos naturales, estanques o humedales, y espacios destinados a la protección de hábitats naturales. La propuesta en cuanto al progarama del eco parque busca reunir distintas actividades que fomentarán una opción de concientizar la idea de sustentabilidad y ecología encerrandola en un solo foco, también con la creación de actividades que sirvan para la relación personal del individuo pudiendo éstas generar ciudad, enlazando conexiones,turismo, esparcimiento, recorridos, entretenimiento y deporte.",
    imagen:
    "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437595/Recurso_23_yng2qd.png",
      carruselImagenes:[
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437595/Recurso_23_yng2qd.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437584/Recurso_21_qwxlfo.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437531/Recurso_20_klcgn0.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437558/Recurso_25_ren1xe.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437558/Recurso_26_nrsx0k.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437554/Recurso_24_scwm9p.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437585/Recurso_27_qdr3jx.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437559/Recurso_28_pwretg.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437561/Recurso_29_kq4lig.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437563/Recurso_31_xsatlp.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437607/Recurso_30_ng4l2r.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686438522/Recurso_36_iu2qio.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437635/Recurso_34_shicxt.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1686437624/Recurso_33_jihhnu.png"
      ]
  },
];

const Proyectos = () => {
  const [proyectos, setProyectos] = useState(proyectosData);


  return (
    <div className="proyectos" id='proyectos'>
        <h2 className='title-proyectos'>Proyectos</h2>
      <div className="proyectos-container">
        {proyectos.map((proyecto,index) => (
          <Card proyecto={proyecto} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
