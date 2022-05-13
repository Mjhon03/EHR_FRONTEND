import React, { useEffect, useState } from 'react'
import { ResultCards } from '../../UI/ResultCards/ResultCards';
import { useSearchParams } from 'react-router-dom'
import { urlSearch } from '../../ApiRoutes'
import axios from 'axios'
import { Header } from '../../Layout/Header/Header';

export const SearchResults = () => {

  const [searchParams] = useSearchParams();
  let searchParam = searchParams.get('value');
  console.log(searchParam);

  const [resultData, setResultData] = useState(['data'])

  useEffect(() => {
    getData()
  },[])

  const getData = () => {
    axios.get(`${urlSearch}?value=${searchParam}`)
      .then(response => {
        setResultData(response.data)
      })
      .catch(ex => {
        console.log(ex);
      })
  }
  return (
    <>
      <div className="search-results-container">
        < Header />
      </div>
    </>
  )
}
