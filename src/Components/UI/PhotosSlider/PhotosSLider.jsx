import React, { useEffect, useState } from 'react'
import axios from "axios"
import SimpleImageSlider from "react-simple-image-slider";
import './PhotosSlider.css'

export const PhotosSLider = () => {

    const [images, setImages] = useState([])

    const getImagesRecent = () => {
        axios.get('https://easy-house-rent.azurewebsites.net/api/Structure/AboutUs')
            .then(response => {
                setImages(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const addImages = () => {
        let renderImages = []
        images.forEach(element => {
            renderImages.push(element.url1)
        });
        return(renderImages)
    }

    let render = addImages()

    useEffect(() => {
        getImagesRecent()
    }, [])

    useEffect(() => {
        addImages()
    }, [images])

    return (
        <div className='flex-carousel'>
            <SimpleImageSlider
                autoPlay={true}
                autoPlayDelay={2}
                loop={true}
                width={896}
                height={504}
                images={render}
                useGPURender={true}
                showBullets={true}
            ></SimpleImageSlider>
            <h1 className='carousel-title'>karen</h1>
        </div>
    )
}
