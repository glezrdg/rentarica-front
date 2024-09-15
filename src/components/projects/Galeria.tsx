import React, { useState, useEffect } from 'react'
import { Galleria } from 'primereact/galleria'

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [images, setImages] = useState([
    {
      itemImageSrc:
        'https://as1.ftcdn.net/v2/jpg/02/91/45/12/1000_F_291451260_DTtmKxG4ph9X8FP22HawITByfdPDG5ZK.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc:
        'https://paladinsecurity.com/wp-content/uploads/2020/06/shivendu-shukla-3yoTPuYR9ZY-unsplash.png',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc:
        'https://as1.ftcdn.net/v2/jpg/02/91/45/12/1000_F_291451260_DTtmKxG4ph9X8FP22HawITByfdPDG5ZK.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
  ])

  const itemTemplate = (item: any) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        className='w-[100%] h-[300px] md:h-[450px] lg:h-[650px] rounded-3xl text-center'
      />
    )
  }

  return (
    <div className='card'>
      <Galleria
        value={images}
        className='w-[100%] rounded-3xl text-center'
        showThumbnails={false}
        showIndicators
        showItemNavigatorsOnHover
        indicator={(index) => (
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedImage(index)}
            className={`h-3 w-3 rounded-full bg-slate-400 mt-2 ${
              selectedImage === index && 'bg-slate-500'
            }`}
          ></div>
        )}
        item={itemTemplate}
      />
    </div>
  )
}
