import React from 'react'
import './SelectDepartment.css'

export const SelectDepartment = ({ data , event  , name }) => {
  return (
    <select className='selector' onChange={ event}>
        <option value='departments'>{ name }</option>
        {
            data.map(element =>(
                <>
                    <option value={element.iddepartamento}>{element.nombre}</option>
                </>
            ))
        }
    </select>
  )
}
