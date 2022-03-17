import React from 'react'

export const SelectDepartment = ({ data , event  , name }) => {
  return (
    <select className='selector' onChange={ event}>
        <option value='departments'>{ name }</option>
        {
            data.map(element =>(
                <>
                    <option key={element.value}>{element.nombre}</option>
                </>
            ))
        }
    </select>
  )
}
