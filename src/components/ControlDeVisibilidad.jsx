const ControlDeVisibilidad = ({setShowCompleted, eliminarCancion, inChecked}) =>{
    const handleEliminar = () =>{
        if(window.confirm('¿Estas seguro de eliminar la lista?'))
        eliminarCancion()
    }
    return(
        <div>
        <input
          type="checkbox"
          checked={inChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        ></input>{" "}
        <label>Mostrar canciones de PXNDX</label>
        <button onClick={handleEliminar}>Borrar</button>
      </div>
    )
}
export default ControlDeVisibilidad