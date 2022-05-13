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

  const [resultData, setResultData] = useState([])

  const getData = () => {
    axios.get(`${urlSearch}?value=${searchParam}`)
      .then(response => {
        console.log(response.data);
        setResultData(response.data)
      })
      .catch(ex => {
        console.log(ex);
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="search-results-container">
        <div className="cards-content">
          < Header />
          {
            resultData.map(
              resultData => (
                <ResultCards key={resultData.idanuncio} data={resultData} />
              )
            )
          }
        </div>
      </div>
    </>
  )
}
