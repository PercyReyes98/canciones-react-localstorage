import { useState, useEffect } from "react";
import CrearCancion from "./components/CrearCancion";
import ListarCanciones from "./components/ListarCanciones";
import ControlDeVisibilidad from "./components/ControlDeVisibilidad";
function App() {
  const [lista, setLista] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  function crearNuevaCancion(nombreCancion) {
    if (!lista.find((cancion) => cancion.name === nombreCancion)) {
      setLista([...lista, { name: nombreCancion, pxndx: true }]);
    }
  }
  const alternarCancion = (cancion) => {
    setLista(
      lista.map((c) =>
        c.name === cancion.name ? { ...c, pxndx: !c.pxndx } : c
      )
    );
  };
  useEffect(() => {
    let datos = localStorage.getItem("canciones");
    if (datos) {
      setLista(JSON.parse(datos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("canciones", JSON.stringify(lista));
  }, [lista]);
  const eliminarCancion= ()=>{
    setLista(lista.filter(cancion=> !cancion.pxndx))
    setShowCompleted(false)
  }
  return (
    <div className="App">
      <CrearCancion crearNuevaCancion={crearNuevaCancion}></CrearCancion>
      <ListarCanciones
        canciones={lista}
        alternarCancion={alternarCancion}
      ></ListarCanciones>
       <ControlDeVisibilidad inChecked={showCompleted} setShowCompleted={(checked)=>setShowCompleted(checked)} eliminarCancion={eliminarCancion}></ControlDeVisibilidad>
      {showCompleted === true && (
        <ListarCanciones
          canciones={lista}
          alternarCancion={alternarCancion}
          showCompleted={showCompleted}
        ></ListarCanciones>
      )}
    </div>
  );
}

export default App;
