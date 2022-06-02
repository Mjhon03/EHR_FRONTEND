import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AnouncementInfo } from '../../Layout/AnoucementInfo/AnouncementInfo.jsx'
import { Header } from '../../Layout/Header/Header'
import { useSearchParams } from 'react-router-dom';
import { urlAdversitement } from '../../ApiRoutes.js';
import { RegisterFooter } from '../../Layout/RegisterFooter/RegisterFooter'
import './Anouncement.css'
import { UserContext } from '../../../UserProvider/UserProvider.jsx';

export const Anouncement = () => {

  const [searchParams] = useSearchParams();
  let idAnouncement = searchParams.get('idanounce');

  const [anouncementData, setAnoucementData] = useState([])

  const [town, setTown] = useState('')

  const getDataAnouncement = () => {
    axios.get(`${urlAdversitement}${idAnouncement}`)
      .then(response => {
        setAnoucementData(response.data)
        setTown(response.data[0].ciudad)
      })
      .catch(err => {
        console.log(err);
      })
  }

  let route = window.location.href

  useEffect(() => {
    getDataAnouncement()
  },[])

  useEffect(()=>{
    getDataAnouncement()
  },[ route])


  return (
    <>
      <div className='anouncement-page'>
        <Header />
        <AnouncementInfo data={anouncementData} />
        <RegisterFooter />
      </div>
    </>
  )
}
