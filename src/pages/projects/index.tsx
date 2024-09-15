'use client'

import ProjectCard from '@/components/home/Proyects/components/ProjectCard'
import Pagination from '@/components/Pagination'
import Hero from '@/components/projects/Hero'

const index = () => {
  return (
    <>
      <Hero />

      <div className='h-[30vh] flex items-center justify-between w-full container xl:px-10'>
        <div className='flex gap-6'>
          <div className='flex items-center shadow-xl rounded-full h-[70px] w-[40vw] border border-slate-200 overflow-hidden'>
            <i className='pi pi-search ml-4 text-xl text-slate-600' />
            <input
              className='bg-white focus:outline-none w-full h-full'
              placeholder='Buscar... (Nombre, Categoria)'
            />
          </div>
          <button className='bg-blue-800 text-white w-[200px] p-2 rounded-full px-4 ml-auto text-lg font-bold'>
            Buscar
          </button>
        </div>

        <div className='flex items-center'>
          <i className='pi pi-filter mr-4' />
          <p>Filtrar por servicio</p>
        </div>
      </div>

      {/* PROJECTS CARDS */}
      <div className='container xl:px-10 m-auto mb-10'>
        <div className='grid grid-cols-3 gap-10'>
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
          <ProjectCard title='' description='' />
        </div>

        <Pagination />
      </div>
    </>
  )
}

export default index
