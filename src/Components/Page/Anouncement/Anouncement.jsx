import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AnouncementInfo } from '../../Layout/AnoucementInfo/AnouncementInfo.jsx'
import { Header } from '../../Layout/Header/Header'
import { useSearchParams } from 'react-router-dom';
import { urlAdversitement } from '../../ApiRoutes.js';
import { RegisterFooter } from '../../Layout/RegisterFooter/RegisterFooter'

export const Anouncement = () => {

  const [searchParams] = useSearchParams();
  let idAnouncement = searchParams.get('idanounce');

  const [anouncementData, setAnoucementData] = useState([])

  const [ zone , setZone ] = useState('')
  const [ town , setTown ] = useState('')

  const getDataAnouncement  = () => {
    axios.get(`${urlAdversitement}${idAnouncement}`)
      .then(response => {
        setAnoucementData(response.data)
        setTown(response.data[0].municipio)
        setZone(response.data[0].zona)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const [ recomended , setRecomended ] = useState([])

  console.log(recomended);

  const getRecomended = () => {
    axios.get('' , { params : { zona : zone , ciudad : town }})
    .then(response => {
      console.log(response.data);
      setRecomended(response.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(()=>{
    getRecomended()
  },[ anouncementData ])

  useEffect(()=>{
    getDataAnouncement()
  },[])

  return(
    <>
        <Header />
        <AnouncementInfo data={anouncementData} />
        <RegisterFooter />
    </>
  )
}
