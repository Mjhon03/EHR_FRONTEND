import React,{useEffect , useState} from 'react'
import './HomeSection.css'
import { useNavigate } from 'react-router-dom'

export const HomeSection = () => {

    const navigate = useNavigate()

    const [ param , setParam ] = useState('')

    useEffect(()=>{
        console.log(param);
    },[param])

    const getParam = (e) =>{
        console.log(e.target.value);
        setParam(e.target.value)
    }

    const sendSearch = () =>{
        navigate(`/result/?value=${param}`)
    }

    return (

        <div>
            <div className='home-section-container'>
                <div className="home-section-info">
                    <div className="section-container">
                        <p className='section-container-slogan'>Aliado en busqueda de hogar</p>
                        <h3 className='section-container-title'>Easy House Rent</h3>
                    </div>
                    <div className="search-home-container">
                        <input className="search-box-home" onChange={(e)=> getParam(e)} type="text" placeholder='Busca por zona , lugar o nombre'></input>
                        <button onClick={sendSearch} className='search-home-submit'>Buscar</button>
                    </div> 
                </div> 
            </div>
            <div className="content-page-info">
                <div className="rent-info">
                    <img className="house-icon" src='https://cdn-icons-png.flaticon.com/512/916/916771.png' alt='apartment-icon'></img>
                    <div className="rent-text">
                        <h3 className='rent-text-title'>diversidad de inmuebles</h3>
                        <p className='rent-info-text'>no solo viviendas, tambien contamos con locales, apartamentos... etc</p>
                    </div>
                </div>
                <div className="rent-info">
                    <img className="house-icon" src='https://cdn-icons-png.flaticon.com/512/1786/1786971.png' alt='apartment-icon'></img>
                    <div className="rent-text">
                        <h3 className='rent-text-title'>facilidad de contacto</h3>
                        <p className='rent-info-text'>contamos con medios que falicitan el contacto entre usuario y propietario</p>
                    </div>
                </div>
                <div className="rent-info">
                    <img className="house-icon" src='https://cdn-icons-png.flaticon.com/512/2971/2971926.png' alt='apartment-icon'></img>
                    <div className="cabin-text">
                        <h3 className='rent-text-title'>diversidad de sectores</h3>
                        <p className='rent-info-text'>publicaciones ofertadas no solo en sector urbano, tambien en sector rural</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
