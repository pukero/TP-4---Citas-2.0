import { useState } from 'react';
import './Formulario.css';

const Formulario = ({AgregarCitas}) => {
  const [citas, setCitas] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',}
  );
  const cambiosInput = (e) => {
    setCitas({
    ...citas, [e.target.name]: e.target.value //"e" es el evento, el onChange etc. target.name es el nombre de lo que se esta agregando, mascota, propietario, etc. 
                                              //Y el target.value es el valor que le esta asignando la persona
    })
  }
  const enviarCitas = (e) => {
    e.preventDefault();
    if(citas.mascota=='' || citas.sintomas=='' || citas.hora=='' || citas.fecha=='' || citas.propietario=='' )
    {
      alert("Todos los campos son obligatorios")
      return;
    } 
    const NuevaCita={
      id: Date.now(), //ME RECOMENDARON USAR ESTO COMO ID ÚNICO
      ...citas
    }

    if(confirm("¿Desea agregar la cita?")) {
      AgregarCitas(NuevaCita); //Agrega la cita
      setCitas({ //vacia las citas para volver a llenar
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
      })
    }

  }

  return (
    <div class="one-half column">
      <h2>Crear mi Cita</h2>
        <form onSubmit={enviarCitas}>
          <label>Nombre Mascota</label>
          <input value={citas.mascota} onChange={cambiosInput} type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" /> {// value={citas.mascota} tiene el valor de lo que esta escribiendo la persona. OnChange es el evento que se lo iguala a la funcion cambiosInput.
          }
          <label>Nombre propietario</label>
          <input value={citas.propietario} onChange={cambiosInput} type="text" name="propietario" class="u-full-width" placeholder="Nombre propietario de la mascota" />
          <label>Fecha</label>
          <input value={citas.fecha} onChange={cambiosInput} type="date" name="fecha" class="u-full-width" />
          <label>hora</label>
          <input value={citas.hora} onChange={cambiosInput} type="time" name="hora" class="u-full-width" />
          <label>sintomas</label>
          <textarea name="sintomas" class="u-full-width" value={citas.sintomas} onChange={cambiosInput}></textarea>
          <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
        </form>
          </div>
  );
};

export default Formulario;
