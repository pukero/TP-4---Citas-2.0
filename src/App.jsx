import { useState } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import './App.css';

function App() {
  const [citas, setCitas] = useState([
    {
      id: '1',
      mascota: 'Pluto',
      propietario: 'Mickey mouse',
      fecha: '09/05/2025',
      hora: '09:00',
      sintomas: 'Fiebre'
    },
  ]);

  const AgregarCitas = (nuevaCita) => {
    setCitas([...citas, nuevaCita])
  }
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <Formulario AgregarCitas={AgregarCitas} />
        <Listado citas={citas} setCitas={setCitas} />
      </div>
    </>
  );
}

export default App;

