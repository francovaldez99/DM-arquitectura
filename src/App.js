
import Nav from './components/Nav/Nav';
import Inicio from './components/Inicio/Inicio';

import Proyectos from './components/Proyectos/Proyectos';
import ContactMe from './components/Contactame/ContactMe';
import NuestroTrabajo from './components/NuestroTrabajo/NuestroTrabajo';
import Servicios from './components/Servicios/Servicios';
import AboutUs from './components/About us/AboutUs';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Inicio/>
      <NuestroTrabajo/>
      <Servicios/>
      <Proyectos/>
      <AboutUs/>
      <ContactMe/>
    </div>
  );
}

export default App;
