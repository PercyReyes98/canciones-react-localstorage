import CancionFila from "./CancionFila"

 const ListarCanciones= ({canciones, alternarCancion, showCompleted=false})=>{
    const listaDeCancionesFila = (value)=>{
        return (canciones
            .filter(cancion=>cancion.pxndx === value)
            .map((cancion) => (
                <CancionFila cancion={cancion} key={cancion.name} alternarCancion={alternarCancion}></CancionFila>
                )))
        
    }
    return ( 
    <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr className="table-primary">
            <th>Repositorio de Canciones</th>
          </tr>
        </thead>
        <tbody>
          {
            listaDeCancionesFila(showCompleted)
          }
        </tbody>
      </table>)
}
export default ListarCanciones