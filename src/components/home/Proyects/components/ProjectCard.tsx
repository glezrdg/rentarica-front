import Link from 'next/link'
import React from 'react'

export interface IProjectCardProps {
  title: string
  description: string
}

const ProjectCard: React.FC<IProjectCardProps> = () => {
  return (
    <div className='relative rounded-lg bg-slate-100 w-full overflow-hidden'>
      <div className='absolute right-5 top-2 bg-slate-100 p-1 px-3 rounded-2xl text-xs text-slate-600'>
        Categoria
      </div>
      {/* IMAGE */}
      <div className='mb-4'>
        <img
          className='h-[200px] w-full'
          src='https://as1.ftcdn.net/v2/jpg/02/91/45/12/1000_F_291451260_DTtmKxG4ph9X8FP22HawITByfdPDG5ZK.jpg'
        />
      </div>

      {/* CONTENT */}
      <div className='px-8 pb-2'>
        <h1 className='font-bold text-base mb-2'>
          Reingeniería de Fabrica de Envases de Vidrio - Caribbean Glass
        </h1>
        <p className='mb-6 text-xs text-slate-500'>
          En GRUPO INAP, hemos llevado a cabo la transformación completa de la
          fábrica Caribbean Glass, especializada en la producción de envases de
          vidrio. 
        </p>
        <Link
          href={'/projects/1'}
          className='btn-orange !py-1 block w-fit !px-6'
        >
          Ver más
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
