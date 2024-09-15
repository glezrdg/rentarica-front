import React from 'react'

interface IServiceCardProps {
  icon?: React.ReactNode
  title: string
  description: string
  className?: string
}

const ServiceCard: React.FC<IServiceCardProps> = ({
  title,
  description,
  className,
  icon,
}) => {
  return (
    <div className={`w-full ${className && className}`}>
      <div className='b-orange rounded-full w-[60px] h-[60px] mb-4 m-auto grid place-items-center'>
        {icon}
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
