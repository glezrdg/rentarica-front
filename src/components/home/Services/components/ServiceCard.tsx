import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { categories } from '@/utils/data'

interface IServiceCardProps {

  title: string
  description: string
  className?: string
 
}

const ServiceCard: React.FC<IServiceCardProps> = ({
  title,
  description,
  className
}) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className={`w-full ${className}`}>
   

      <h3 className='text-lg font-bold mb-3 text-center'>{title}</h3>
      <p className='mb-4 text-justify'>{description}</p>

      <div className='w-full text-center'>
        <button className='btn-outline ' onClick={() => setVisible(true)}>
          Conoce Más
        </button>
      </div>

    </div>
  )
}

export default ServiceCard
