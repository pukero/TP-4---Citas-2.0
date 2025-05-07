import './Listado.css';
import Cita from './Cita';

const Listado = ({ citas, setCitas }) => {
  const eliminarCita = (index) => {
    if(confirm("¿Desea eliminar la cita?")){
    const nuevasCitas = citas.filter(function(cita, i) {
      return i !== index;
    });
    
    setCitas(nuevasCitas);
  };
}

  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {citas.length === 0 ? (
        <p></p>
      ) : (
        citas.map((cita, index) => (
          <Cita
            key={index}
            index={index}
            nombre={cita.mascota}
            propietario={cita.propietario}
            fecha={cita.fecha}
            hora={cita.hora}
            sintomas={cita.sintomas}
            eliminarCita={eliminarCita}
          />
        ))
      )}
    </div>
  );
};

export default Listado;


