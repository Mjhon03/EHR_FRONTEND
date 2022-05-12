import React, { useEffect, useState } from 'react'
import { ResultCards } from '../../UI/ResultCards/ResultCards';

export const SearchResults = () => {

  let searchParam = searchParams.get('value');
  console.log(searchParam);
  const [params, setParams] = useState(true)

  const [ resultData , setResultData ] = useState([])

  useEffect(()=>{
    console.log(resultData);
  },[resultData])

  const getResults = () =>{
    axios.get('urlbusqueda' , { params : { value : searchParam }})
    .then(response => {
      console.log(response);
      setResultData(response.data)
    })
    .catch(ex => {
      console.log(ex);
    })
  }
  return (
    <>
      {params &&
        <div className="search-results-container">
          < ResultCards data={ resultData } />
        </div>
      }
    </>
  )
}
