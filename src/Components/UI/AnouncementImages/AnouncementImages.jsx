import React from 'react'
import './AnouncementImages.css'

export const AnouncementImages = ({ url1 , url2 , url3 , url4} ) => {
  return (
    <div className="relative-images-container">
        <div className="first-relative-image">
            <img  className='relative-img' src={url1} alt="relative-1" />
        </div>
        <div className="relatives-image">
            <div className="relative-image-render">
               <img className='relative-img' src={url2} alt="relative-2" /> 
            </div>
            <div className="relative-image-render">
                <img className='relative-img' src={url3} alt="relative-3" />
            </div>
            <div className="relative-image-render">
                <img src={url4} className='relative-img' alt="relative-4" />
            </div>
        </div>
    </div>
  )
}
