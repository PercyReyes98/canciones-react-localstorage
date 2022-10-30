import { useState } from "react";

const CrearCancion = ({ crearNuevaCancion }) => {
  const [captura, setCaptura] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    crearNuevaCancion(captura);
    localStorage.setItem("canciones", captura);
    setCaptura("");
  };
  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
      <input
        value={captura}
        type="text"
        placeholder="Ingrese una cancion"
        onChange={(e) => setCaptura(e.target.value)}
         className="form-control"></input>
      </div>
      <div className="col-3">
      <button className="btn btn-primary btn-sm">Guardar</button>
      </div>
    </form>
  );
};
export default CrearCancion;
