import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { categories } from '@/utils/data'

interface IServiceCardProps {
  icon?: React.ReactNode
  title: string
  description: string
  className?: string
  index: number
}

const ServiceCard: React.FC<IServiceCardProps> = ({
  title,
  description,
  className,
  icon,
  index,
}) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className={`w-full ${className && className}`}>
      <div className='b-orange rounded-full w-[60px] h-[60px] mb-4 m-auto grid place-items-center'>
        {icon}
      </div>

      <h3 className='text-lg font-bold mb-3 text-center'>{title}</h3>
      <p className='mb-4 text-center lg:text-justify'>{description}</p>

      <div className='w-full text-center'>
        <button className='btn-outline ' onClick={() => setVisible(true)}>
          Conoce Más
        </button>
      </div>

      {visible && (
        <Dialog
          visible={visible}
          modal
          onHide={() => {
            if (!visible) return
            setVisible(false)
          }}
          content={({ hide }) => (
            <div className='flex flex-col md:flex-row gap-4 w-[95vw] lg:w-[50vw] lg:h-[80vh] bg-white rounded-lg overflow-scroll md:overflow-hidden'>
              <div
                className='absolute text-xl right-10 top-5 cursor-pointer'
                onClick={hide}
              >
                x
              </div>
              <div className='w-full md:w-1/2  h-[400px] md:h-full flex-1'>
                <img
                  className='w-full h-full object-cover'
                  src={categories[index].image}
                />
              </div>
              <div className='py-8 px-3 flex-1'>
                <div className='b-orange m-auto md:mx-0 rounded-full w-[60px] h-[60px] mb-4 grid place-items-center'>
                  {icon}
                </div>

                <h3 className='text-lg font-bold mb-3 text-center md:text-left'>
                  {title}
                </h3>
                <p className='mb-4 text-center md:text-left '>
                  {categories[index].description}
                </p>
                <ul className='text-[14px] p-4'>
                  {categories[index].items.map((i) => (
                    <li className='list-disc mb-1'>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        ></Dialog>
      )}
    </div>
  )
}

export default ServiceCard
