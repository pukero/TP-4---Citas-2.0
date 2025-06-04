import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import './App.css';

function App() {
  const [citas, setCitas] = useState(function () {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas !== null) {
      return JSON.parse(citasGuardadas);
    } else {
      return [];
    }
  });
  
  // Recuperar citas del localStorage al iniciar
  useEffect(function () {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas !== null) {
      const citasRecuperadas = JSON.parse(citasGuardadas);
      setCitas(citasRecuperadas);
    }
  }, []);

  // Guardar en localStorage cuando cambian las citas
  useEffect(function () {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  // Función para agregar nueva cita
  const AgregarCitas = function (nuevaCita) {
    const nuevaLista = [];
    citas.forEach(function (cita) {
      nuevaLista.push(cita);
    });
    nuevaLista.push(nuevaCita);
    setCitas(nuevaLista);
  };

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
