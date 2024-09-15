import React from 'react'

interface IServiceCardProps {
  children?: React.ReactNode
  title: string
  description: string
}

const ServiceCard: React.FC<IServiceCardProps> = ({ title, description }) => {
  return (
    <div className='w-full'>
      <div className='b-orange rounded-full w-[60px] h-[60px] mb-4 m-auto'>
        icono
      </div>

      <h3 className='text-lg font-bold mb-3 text-center'>{title}</h3>
      <p className='mb-4 text-center'>{description}</p>

      <div className='w-full text-center'>
        <button className='btn-outline '>Conoce mas</button>
      </div>
    </div>
  )
}

export default ServiceCard
