import React from 'react'
import './SelectMunicipality.css'

export const SelectMunicipality = ({ data , event }) => {
  return (
    <select className='selector' onChange={event}>
        <option placeholder='Municipio'></option>
        {
            data.map(element =>(
                <>
                    <option value={element.idmunicipio}>{element.nombre}</option>
                </>
            ))
        }
    </select>
  )
}
