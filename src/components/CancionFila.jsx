

const CancionFila = ({cancion, alternarCancion}) =>{
    return(
        <tr >
              <td className="d-flex justify-content-between">
                {cancion.name}
              <input type="checkbox" checked={cancion.pxndx} onChange={()=>{alternarCancion(cancion)}}></input></td>
            </tr>
    )
}
export default CancionFila