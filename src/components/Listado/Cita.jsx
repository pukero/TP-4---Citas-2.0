import './Cita.css';

const Cita = ({ nombre, propietario, fecha, hora, sintomas, eliminarCita, index }) => { // Se envia por parametro con props
  return (
    <div className="cita">
      <p>Mascota: <span>{nombre}</span></p>
      <p>Dueño: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>
      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(index)}//llama a eliminarCita de IndexListado para que cuando haga click en el button Eliminar x se elimine la cita.
      >
        Eliminar x
      </button>
    </div>
  );
};

export default Cita;
