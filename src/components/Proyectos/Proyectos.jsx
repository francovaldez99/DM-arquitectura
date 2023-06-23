import React from 'react';
import './Proyectos.css';
import Card from './Card';

const proyectos = [
  {
    id: 1,
    titulo: "Espacio de Coworking-Factory",
    tipo: "Casa",
    texto:
      "Esta fábrica de coworking como tipo de espacio diseñado específicamente para adaptarse a las necesidades de los creadores y creadoras,A diferencia de los espacios de coworking tradicionales, que tienden a orientarse más hacia trabajadores independientes y trabajadores del conocimiento, este ofrece instalaciones y equipos para actividades de fabricación y producción",
    imagen:
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553992/PAG%20900PX/COWORKING/ESPACIO-CO-WORKING-PORTADA_gnssw7_ie99xo.png",
    carruselImagenes: [
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553992/PAG%20900PX/COWORKING/ESPACIO-CO-WORKING-PORTADA_gnssw7_ie99xo.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553990/PAG%20900PX/COWORKING/Recurso_2_iovmbs_ctt69s.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553990/PAG%20900PX/COWORKING/Recurso_6_kfv5wc_fnskjv.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553990/PAG%20900PX/COWORKING/Recurso_1_x2psnp.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553989/PAG%20900PX/COWORKING/Recurso_1_iuca6s_sawpsw.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553992/PAG%20900PX/COWORKING/imagen_2023-06-10_190455702_x4b4tg_gca1o0.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553990/PAG%20900PX/COWORKING/Recurso_8_bruyel_ux4vlv.png",
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553991/PAG%20900PX/COWORKING/Recurso_9_hmuvya_a2fbmi.png"
    ],
  },
  {
titulo:"Espacio Coworking-Factory II ",
texto:"	Hemos creado un espacio único y dinámico que combina la colaboración creativa y la producción industrial en un entorno inspirador.<br/>Nuestro proyecto de coworking fábrica es mucho más que un espacio de trabajo compartido. Es un ecosistema empresarial donde diseñadores, emprendedores, artesanos y profesionales de diversos campos pueden conectarse, colaborar y crecer juntos.<br/>Nuestro espacio cuenta con amplias áreas de trabajo compartido, oficinas privadas y salas de reuniones equipadas con tecnología de vanguardia. Nuestras instalaciones modernas y funcionales están diseñadas para fomentar la productividad y el intercambio de ideas.<br/> Aquí, los miembros tienen acceso a, herramientas especializadas y una variedad de recursos para llevar a cabo proyectos de fabricación y prototipado. Ya sea que estés creando productos físicos, desarrollando tecnología o llevando a cabo experimentos creativos, nuestra fábrica tiene todo lo que necesitas para hacerlo realidad.<br/>Valoramos la comunidad y el espíritu colaborativo fomentando la interacción y el intercambio de conocimientos a través de eventos, talleres y networking.",
imagen:"https://res.cloudinary.com/db3bcqim6/image/upload/v1687557328/diego/trabajo%20mati/PORTADA_lkymrh.png",
carruselImagenes:[
  "https://res.cloudinary.com/db3bcqim6/image/upload/v1687557328/diego/trabajo%20mati/PORTADA_lkymrh.png",
  "https://res.cloudinary.com/db3bcqim6/image/upload/v1687557326/diego/trabajo%20mati/IMAGEN_1_DESPUES_DE_LA_PORTADA_yw8ucg.png",
  "https://res.cloudinary.com/db3bcqim6/image/upload/v1687557323/diego/trabajo%20mati/IMAG_2_mnipvb.png",
  "https://res.cloudinary.com/db3bcqim6/image/upload/v1687557326/diego/trabajo%20mati/IMAG_3_z5jhmz.png",
  "https://res.cloudinary.com/db3bcqim6/image/upload/v1687557325/diego/trabajo%20mati/IMG_4_m5gkdk.jpg",
  "https://res.cloudinary.com/db3bcqim6/image/upload/v1687557327/diego/trabajo%20mati/IMAG_5_xujvm6.png",
  "https://res.cloudinary.com/db3bcqim6/image/upload/v1687557324/diego/trabajo%20mati/ULTIMA_tovu5f.jpg"
]
  },
  {
    id: 2,
    titulo: "Centro de Educacion Guemes",
    tipo: "Construcción",
    texto:
      "Un espacio multifuncional en el contexto de una escuela refiere a áreas o ambientes dentro de la institución educativa que se puedan utilizar para diferentes propósitos y actividades educativas, Estos espacios están diseñados para ser flexibles y adaptarse a diversas necesidades pedagógicas dentro de una arquitectura nueva,Un espacio multifuncional en el contexto de una escuela refiere a áreas o ambientes dentro de la institución educativa que se puedan utilizar para diferentes propósitos y actividades educativas, Estos espacios están diseñados para ser flexibles y adaptarse a diversas necesidades pedagógicas dentro de una arquitectura nueva.",
    imagen:
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554110/PAG%20900PX/CENTRO%20DE%20EDUCACION%20GUEMES/PORTADA_itiqfv.png",
      carruselImagenes:[
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554110/PAG%20900PX/CENTRO%20DE%20EDUCACION%20GUEMES/PORTADA_itiqfv.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554101/PAG%20900PX/CENTRO%20DE%20EDUCACION%20GUEMES/Recurso_6_z0z3hh.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554101/PAG%20900PX/CENTRO%20DE%20EDUCACION%20GUEMES/Recurso_1_pug33d.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554099/PAG%20900PX/CENTRO%20DE%20EDUCACION%20GUEMES/Recurso_2_kjfoqt.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554099/PAG%20900PX/CENTRO%20DE%20EDUCACION%20GUEMES/Recurso_3_uxsfux.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554099/PAG%20900PX/CENTRO%20DE%20EDUCACION%20GUEMES/Recurso_4_nidcpt.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554099/PAG%20900PX/CENTRO%20DE%20EDUCACION%20GUEMES/Recurso_5_mqfqac.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554100/PAG%20900PX/CENTRO%20DE%20EDUCACION%20GUEMES/Recurso_7_uffd9k.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554100/PAG%20900PX/CENTRO%20DE%20EDUCACION%20GUEMES/Recurso_10_zly0cr.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554101/PAG%20900PX/CENTRO%20DE%20EDUCACION%20GUEMES/Recurso_11_uokaa3.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554100/PAG%20900PX/CENTRO%20DE%20EDUCACION%20GUEMES/Recurso_8_dvmlls.png",


      ]
  },
  {
    id: 3,
    titulo: "Remodelacion vivienda Unifamiliar",
    tipo: "Casa",
    texto:
      "Esta vivienda unifamiliar ofrece la posibilidad de tener un espacio de privacidad personalizado según las necesidades y preferencias de la familia que la habita, Puede variar en tamaño, estilo arquitectónico y distribución interna, dependiendo de la cultura, el entorno y los requisitos locales,Esta vivienda se centra en minimizar su huella ecológica y promover un estilo de vida más sostenible, incorporando aspectos claves como la eficiencia energética,uso de materiales sostenibles, el aprovechamiento de recursos naturales y la reutilización de aguas grises y de lluvias,Un espacio que está diseñado y construido para cumplir ciertos estándares y criterios de calidad que lo hacen adecuado para su propósito específico,Esta vivienda diseñada para ser funcional y adaptarse a las necesidades de los    usuarios, Siempre teniendo en cuenta asoleamientos, ventilación y recursos que hagan a la vivienda más confortable,",
    imagen:
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554120/PAG%20900PX/REMODELACION%20VIV./Recurso_10_vmwhey_gsuqhd.png",
      carruselImagenes:[
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554120/PAG%20900PX/REMODELACION%20VIV./Recurso_10_vmwhey_gsuqhd.png",
        
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554122/PAG%20900PX/REMODELACION%20VIV./Recurso_14_nqrmat.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554120/PAG%20900PX/REMODELACION%20VIV./Recurso_11_ym3e1z_q5a5iy.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554122/PAG%20900PX/REMODELACION%20VIV./Recurso_13_l5jyol.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554121/PAG%20900PX/REMODELACION%20VIV./Recurso_12_hoshle_eptya0.png",
      ]
  },
  {
    id: 4,
    titulo: "Renovacion Fachada",
    tipo: "Construcción",
    texto:"Mediante la renovación de esta fachada logré múltiples objetivos, como mejorar la estética, aumentar el atractivo visual, actualizar el diseño para que se ajuste a los estándares contemporáneos, mejorar la eficiencia energética y corregir problemas estructurales,La incorporación de colores, texturas, e iluminación que en conjunto se adecuen,logran una integración total y renovadora de su exterior,En su estética, diseño y estilo pude implicar cambios en los materiales de revestimiento, la paleta de colores, la forma y las características ornamentales, Es importante destacar que se logró tener en cuenta el estilo arquitectónico del edificio y asegurarse de que la renovación sea coherente con lo existente y armoniosa con el entorno urbano y a la vez cuidando los gustos e intereses de mi cliente.",
        imagen:
      "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554175/PAG%20900PX/RENOVACION%20FACHADA/Recurso_18_csq4l1.png",
      carruselImagenes:[
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554175/PAG%20900PX/RENOVACION%20FACHADA/Recurso_18_csq4l1.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554171/PAG%20900PX/RENOVACION%20FACHADA/Recurso_17_gkh4xt.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687554172/PAG%20900PX/RENOVACION%20FACHADA/Recurso_19_mqpi7x.png"
      ]
  },
  {
    id: 5,
    titulo: "Diseño parque ecologico y centro de actividades socio cultural",
    tipo: "Casa",
    texto:"Desarrollado con un enfoque ecológico y sostenible. Estos parques están diseñados para promover la conservación ambiental, el uso eficiente de los recursos naturales y la educación sobre temas relacionados con el medio ambiente. Conservación de la biodiversidad: El eco parque incluye áreas verdes con una variedad de especies vegetales y animales para promover la conservación de la biodiversidad local,con senderos naturales, estanques o humedales, y espacios destinados a la protección de hábitats naturales. La propuesta en cuanto al progarama del eco parque busca reunir distintas actividades que fomentarán una opción de concientizar la idea de sustentabilidad y ecología encerrandola en un solo foco, también con la creación de actividades que sirvan para la relación personal del individuo pudiendo éstas generar ciudad, enlazando conexiones,turismo, esparcimiento, recorridos, entretenimiento y deporte.",
    imagen:
    "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553869/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_23_svgonk.png",
      carruselImagenes:[
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553869/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_23_svgonk.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553885/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_21_qwby8a.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553879/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_20_cjvji4.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553868/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_25_bj7ozd.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553870/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_26_zayuh0.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553869/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_24_evge0q.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553870/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_27_ixhm8z.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553871/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_28_fr31uv.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553871/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_29_nhmae5.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553871/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_31_xjgi9d.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553871/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_30_tc70fl.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553872/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_36_dxiduz.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553872/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_34_rgsw0l.png",
        "https://res.cloudinary.com/db3bcqim6/image/upload/v1687553872/PAG%20900PX/PARQUE%20ECOLOGICO/Recurso_33_cqws5s.png"
      ]
  },
];

const Proyectos = () => {
 


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
