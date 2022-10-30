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
    <form onSubmit={handleSubmit}>
      <input
        value={captura}
        type="text"
        placeholder="Ingrese una cancion"
        onChange={(e) => setCaptura(e.target.value)}
      ></input>
      <button>guardar</button>
    </form>
  );
};
export default CrearCancion;
