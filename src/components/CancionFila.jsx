

const CancionFila = ({cancion, alternarCancion}) =>{
    return(
        <tr >
              <td>{cancion.name}
              <input type="checkbox" checked={cancion.pxndx} onChange={()=>{alternarCancion(cancion)}}></input></td>
            </tr>
    )
}
export default CancionFila