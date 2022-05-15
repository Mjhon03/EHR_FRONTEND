import axios from 'axios';
import React, { useState } from 'react'
import { AnouncementInfo } from '../../Layout/AnoucementInfo/AnouncementInfo.jsx'
import { Header } from '../../Layout/Header/Header'
import { useSearchParams } from 'react-router-dom';

export const Anouncement = () => {
  
  const [searchParams] = useSearchParams();
  let idAnouncement = searchParams.get('idanounce');
  let zone = searchParams.get('adzone') 
  console.log(idAnouncement , zone );

  const [ anouncementData , setAnoucementData ] = useState([])

  const getDataAnouncement = () =>[
    axios.get('urlAnouncements',{ params : { idanuncio : idAnouncement}})
    .then(response => {
      setAnoucementData(response.data)
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  ]

  return (
    <div>
        <Header />
        <AnouncementInfo  data={ anouncementData}/>
    </div>
  )
}
