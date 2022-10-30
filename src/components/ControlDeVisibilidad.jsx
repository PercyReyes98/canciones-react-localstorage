const ControlDeVisibilidad = ({setShowCompleted, eliminarCancion, inChecked}) =>{
    const handleEliminar = () =>{
        if(window.confirm('¿Estas seguro de eliminar la lista?'))
        eliminarCancion()
    }
    return(
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
        <div className="form-check form-switch">
        <input
        className="form-check-input"
          type="checkbox"
          checked={inChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        ></input>{" "}
        <label>Mostrar canciones de PXNDX</label>
        </div>
        <button className="btn btn-danger btn-sm" onClick={handleEliminar}>Borrar</button>
      </div>
    )
}
export default ControlDeVisibilidad