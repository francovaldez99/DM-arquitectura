
import Inicio from './components/Inicio/Inicio';

import Proyectos from './components/Proyectos/Proyectos';
import ContactMe from './components/Contactame/ContactMe';
import NuestroTrabajo from './components/NuestroTrabajo/NuestroTrabajo';
import Servicios from './components/Servicios/Servicios';
import AboutUs from './components/About us/AboutUs';


function App() {
  return (
    <div className="App">
   
      <Inicio/>
      <NuestroTrabajo/>
      <Servicios/>
      <Proyectos/>
      <ContactMe/>
      <AboutUs/>
    </div>
  );
}

export default App;
